// Build elife-meeting-2026-04-21-slides.pptx from markdown.
// Adapted from /Users/zach/Projects/thinking-and-writing/presentation/build-iclr-deck.js
// Canonical method: ~/Projects/haak/platform/methods/presentation/index.md
//
// Resolves pptxgenjs from the ICLR precedent's node_modules so this script
// runs without a local install. To use a local install, run `npm install
// pptxgenjs` in this directory first.

const path = require('path');
const fs = require('fs');

const ICLR_NODE_MODULES = '/Users/zach/Projects/thinking-and-writing/presentation/node_modules';
let pptxgen;
try {
  pptxgen = require('pptxgenjs');
} catch (e) {
  pptxgen = require(path.join(ICLR_NODE_MODULES, 'pptxgenjs'));
}

// === Design system (canonical method, strict) ===
const TITLE_FONT = 'Baskerville';
const BODY_FONT = 'Helvetica Neue';
const SECTION_SIZE = 44;
const TITLE_SIZE = 36;
const BODY_SIZE = 18;
const TEXT_COLOR = '1A1A1A';
const SUBTLE_COLOR = '666666';
const TEAL = '269E8C';

function parseRuns(text, baseOpts) {
  const opts = Object.assign({ fontFace: BODY_FONT, fontSize: BODY_SIZE, color: TEXT_COLOR }, baseOpts || {});
  const parts = [];
  const re = /\*\*(.+?)\*\*/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ text: text.slice(last, m.index), options: Object.assign({}, opts) });
    parts.push({ text: m[1], options: Object.assign({}, opts, { bold: true }) });
    last = re.lastIndex;
  }
  if (last < text.length) parts.push({ text: text.slice(last), options: Object.assign({}, opts) });
  return parts;
}

function parseMarkdown(mdPath) {
  const lines = fs.readFileSync(mdPath, 'utf8').split('\n');
  const slides = [];
  let current = null;

  for (const line of lines) {
    const noteMatch = line.match(/<!--\s*notes:\s*([\s\S]*?)\s*-->/);
    if (noteMatch) { if (current) current.notes = noteMatch[1]; continue; }
    const imgMatch = line.match(/!\[.*?\]\((.+?)\)/);
    if (imgMatch) { if (current) current.image = imgMatch[1]; continue; }

    if (line.startsWith('### ')) {
      current = { type: 'auto', title: line.slice(4).trim(), body: [] };
      slides.push(current);
    } else if (line.startsWith('## ')) {
      current = { type: 'section', title: line.slice(3).trim() };
      slides.push(current);
    } else if (line.startsWith('# ')) {
      current = { type: 'title', title: line.slice(2).trim(), body: [] };
      slides.push(current);
    } else if (current && current.body !== undefined && line.trim()) {
      // Strip leading bullet markers ("- " or "* ") so we can re-bullet uniformly.
      let t = line.trim();
      if (t.startsWith('- ')) t = t.slice(2);
      else if (t.startsWith('* ')) t = t.slice(2);
      current.body.push(t);
    }
  }

  // Resolve `auto` slide types: figure if image, statement if no body, else content.
  for (const s of slides) {
    if (s.type !== 'auto') continue;
    if (s.image) s.type = 'figure';
    else if (!s.body || s.body.length === 0) s.type = 'statement';
    else s.type = 'content';
  }

  return slides;
}

// LAYOUT_WIDE = 13.33 x 7.5 inches.
const SLIDE_W = 13.33;
const SLIDE_H = 7.5;

function buildDeck(slides, mdDir) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE';
  pres.author = 'Z. Mainen';
  pres.title = 'Claim Graphs for eLife';

  const placeholderNotes = [];

  for (const s of slides) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    if (s.type === 'title') {
      // Centered title with teal rule above and subtitle lines below.
      slide.addShape(pres.ShapeType.line, {
        x: 4.0, y: 3.0, w: 5.33, h: 0,
        line: { color: TEAL, width: 2 },
      });
      slide.addText(s.title, {
        x: 1.0, y: 3.3, w: SLIDE_W - 2.0, h: 1.2,
        fontFace: TITLE_FONT, fontSize: TITLE_SIZE, color: TEXT_COLOR,
        align: 'center',
      });
      if (s.body && s.body.length) {
        slide.addText(s.body.join('\n'), {
          x: 1.0, y: 4.7, w: SLIDE_W - 2.0, h: 1.4,
          fontFace: BODY_FONT, fontSize: BODY_SIZE, color: TEXT_COLOR,
          align: 'center', lineSpacingMultiple: 1.4,
        });
      }
    } else if (s.type === 'section') {
      // Section divider: 44pt centered Baskerville.
      slide.addShape(pres.ShapeType.line, {
        x: 4.0, y: 3.4, w: 5.33, h: 0,
        line: { color: TEAL, width: 2 },
      });
      slide.addText(s.title, {
        x: 1.0, y: 3.7, w: SLIDE_W - 2.0, h: 1.4,
        fontFace: TITLE_FONT, fontSize: SECTION_SIZE, color: TEXT_COLOR,
        align: 'center',
      });
    } else if (s.type === 'statement') {
      // Statement slide: 36pt centered Baskerville, no body.
      slide.addText(s.title, {
        x: 1.0, y: 3.0, w: SLIDE_W - 2.0, h: 1.5,
        fontFace: TITLE_FONT, fontSize: TITLE_SIZE, color: TEXT_COLOR,
        align: 'center', valign: 'middle',
      });
    } else if (s.type === 'figure') {
      // Figure slide: small caption (subtle) at top, image fills below.
      const imgPath = path.isAbsolute(s.image) ? s.image : path.join(mdDir, s.image);
      const exists = fs.existsSync(imgPath);
      slide.addText(s.title, {
        x: 0.8, y: 0.4, w: SLIDE_W - 1.6, h: 0.5,
        fontFace: BODY_FONT, fontSize: BODY_SIZE, color: SUBTLE_COLOR,
        align: 'left',
      });
      if (exists) {
        slide.addImage({
          path: imgPath,
          x: 1.0, y: 1.1, w: SLIDE_W - 2.0, h: SLIDE_H - 1.5,
          sizing: { type: 'contain', w: SLIDE_W - 2.0, h: SLIDE_H - 1.5 },
        });
      } else {
        // Missing image: render gray box + small subtle caption inside.
        slide.addShape(pres.ShapeType.rect, {
          x: 1.0, y: 1.1, w: SLIDE_W - 2.0, h: SLIDE_H - 1.5,
          fill: { color: 'F2F2F2' },
          line: { color: 'CCCCCC', width: 0.5 },
        });
        slide.addText('(figure placeholder)', {
          x: 1.0, y: 1.1 + (SLIDE_H - 1.5) / 2 - 0.3, w: SLIDE_W - 2.0, h: 0.6,
          fontFace: BODY_FONT, fontSize: BODY_SIZE, color: SUBTLE_COLOR,
          align: 'center', valign: 'middle', italic: true,
        });
        placeholderNotes.push(`${s.title} -> ${s.image}`);
      }
    } else if (s.type === 'content') {
      // Content slide: 36pt Baskerville title, teal rule, bulleted 18pt body.
      slide.addText(s.title, {
        x: 0.8, y: 0.5, w: SLIDE_W - 1.6, h: 0.9,
        fontFace: TITLE_FONT, fontSize: TITLE_SIZE, color: TEXT_COLOR,
      });
      slide.addShape(pres.ShapeType.line, {
        x: 0.8, y: 1.45, w: 4.0, h: 0,
        line: { color: TEAL, width: 1.5 },
      });
      const runs = [];
      for (let i = 0; i < s.body.length; i++) {
        const lineRuns = parseRuns('\u2022  ' + s.body[i]);
        if (lineRuns.length) lineRuns[lineRuns.length - 1].options.breakLine = true;
        runs.push(...lineRuns);
      }
      if (runs.length) {
        slide.addText(runs, {
          x: 0.8, y: 1.75, w: SLIDE_W - 1.6, h: SLIDE_H - 2.3,
          valign: 'top', lineSpacingMultiple: 1.35,
          paraSpaceAfter: 6,
        });
      }
    }

    if (s.notes) slide.addNotes(s.notes);
  }

  return { pres, placeholderNotes };
}

const mdPath = path.resolve(__dirname, '..', 'docs', 'elife-meeting-2026-04-21-slides.md');
const outPath = path.resolve(__dirname, '..', 'docs', 'elife-meeting-2026-04-21-slides.pptx');

const slides = parseMarkdown(mdPath);
const { pres, placeholderNotes } = buildDeck(slides, path.dirname(mdPath));

console.log(`Parsed ${slides.length} slides:`);
const counts = {};
for (const s of slides) counts[s.type] = (counts[s.type] || 0) + 1;
for (const t of Object.keys(counts)) console.log(`  ${t}: ${counts[t]}`);
if (placeholderNotes.length) {
  console.log(`Placeholders rendered (${placeholderNotes.length}):`);
  for (const p of placeholderNotes) console.log(`  - ${p}`);
}

pres.writeFile({ fileName: outPath })
  .then((f) => console.log(`Wrote: ${f}`))
  .catch((e) => { console.error(e); process.exit(1); });
