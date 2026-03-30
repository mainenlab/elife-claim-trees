#!/usr/bin/env python3
"""
Bouyeure 2026 — Reproduced brain-map figure panels.

NIfTI source: NeuroVault collection 23032 (cached in /tmp/bouyeure-neurovault/).
Uses nilearn.plotting.plot_stat_map for standard glass-brain + slice views.

Key finding reproduced:
  - current-threat: 7,473 sig voxels, peak MNI (-9, 10, 41.5) = dACC/SFG ✓
  - prior-threat:       36 sig voxels, peak MNI (-9, -92.5, -6)  = occipital ✗
    (Paper claims fear network activation — this is the documented mismatch.)
"""

import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import nibabel as nib

try:
    from nilearn import plotting as nlplot
    from nilearn.image import threshold_img
    HAS_NILEARN = True
except ImportError:
    HAS_NILEARN = False
    print("[warn] nilearn not available — using nibabel + matplotlib imshow")

CACHE_DIR = "/tmp/bouyeure-neurovault"
OUT = os.path.dirname(__file__)
DPI = 150

THRESHOLD = 1.301   # -log10(0.05) significance threshold

# MNI reference brain — nilearn's built-in template
def get_bg():
    if HAS_NILEARN:
        from nilearn.datasets import load_mni152_template
        return load_mni152_template(resolution=2)
    return None

# ─── Nilearn stat map rendering ───────────────────────────────────────────────

def render_with_nilearn(nii_path, out_path, title, cut_coords=None, vmax=None,
                        colorbar_label="-log10(p)", annotate_peak=None,
                        cmap="hot_r"):
    """Render a stat map using nilearn with three orthogonal slices."""
    img = nib.load(nii_path)
    bg = get_bg()

    data = img.get_fdata()
    n_sig = int(np.sum(data > THRESHOLD))

    if vmax is None:
        vmax = max(data.max(), THRESHOLD + 0.1)

    # Auto cut_coords at peak if not specified
    if cut_coords is None:
        affine = img.affine
        peak_idx = np.unravel_index(np.argmax(data), data.shape)
        peak_mni = tuple((affine @ np.array([*peak_idx, 1]))[:3].tolist())
        cut_coords = peak_mni

    fig, axes = plt.subplots(1, 3, figsize=(12, 3.5))

    for ax, display_mode, label in zip(
        axes,
        ["x", "y", "z"],
        ["Sagittal", "Coronal", "Axial"]
    ):
        display = nlplot.plot_stat_map(
            img,
            bg_img=bg,
            threshold=THRESHOLD,
            vmax=vmax,
            cut_coords=[cut_coords[{"x": 0, "y": 1, "z": 2}[display_mode]]],
            display_mode=display_mode,
            colorbar=False,
            cmap=cmap,
            axes=ax,
            annotate=True,
            draw_cross=True,
        )
        ax.set_title(label, fontsize=10, pad=4)

    # Overall title + stats annotation
    stat_str = f"Significant voxels (p<0.05 TFCE): {n_sig}"
    if annotate_peak is not None:
        stat_str += f"\nPeak MNI: {annotate_peak}"

    fig.suptitle(f"{title}\n{stat_str}", fontsize=11.5, y=1.02,
                 fontweight="bold", wrap=True)

    # Colorbar
    sm = plt.cm.ScalarMappable(cmap=cmap,
                                norm=plt.Normalize(vmin=THRESHOLD, vmax=vmax))
    sm.set_array([])
    cbar = fig.colorbar(sm, ax=axes, orientation="vertical",
                        fraction=0.015, pad=0.02, shrink=0.85)
    cbar.set_label(colorbar_label, fontsize=9)

    plt.tight_layout()
    fig.savefig(out_path, dpi=DPI, bbox_inches="tight")
    plt.close()
    print(f"[ok] {out_path}")

# ─── Fallback: nibabel + imshow ───────────────────────────────────────────────

def render_with_nibabel(nii_path, out_path, title, annotate_peak=None, cmap="hot"):
    """Fallback: show three orthogonal slices through the peak using imshow."""
    img = nib.load(nii_path)
    data = img.get_fdata()
    affine = img.affine
    n_sig = int(np.sum(data > THRESHOLD))

    # Mask below threshold
    display = np.where(data > THRESHOLD, data, np.nan)

    peak_idx = np.unravel_index(np.argmax(data), data.shape)
    xi, yi, zi = peak_idx

    fig, axes = plt.subplots(1, 3, figsize=(11, 3.2))
    labels = [f"Sagittal (x={xi})", f"Coronal (y={yi})", f"Axial (z={zi})"]
    slices = [display[xi, :, :], display[:, yi, :], display[:, :, zi]]

    vmax = np.nanmax(display) if not np.all(np.isnan(display)) else 2.0

    for ax, sl, lbl in zip(axes, slices, labels):
        im = ax.imshow(sl.T, origin="lower", cmap=cmap,
                       vmin=THRESHOLD, vmax=vmax, aspect="auto")
        ax.set_title(lbl, fontsize=10)
        ax.axis("off")

    stat_str = f"Significant voxels (p<0.05 TFCE): {n_sig}"
    if annotate_peak is not None:
        stat_str += f"\nPeak MNI: {annotate_peak}"

    fig.suptitle(f"{title}\n{stat_str}", fontsize=11.5, fontweight="bold", y=1.02)

    sm = plt.cm.ScalarMappable(cmap=cmap,
                                norm=plt.Normalize(vmin=THRESHOLD, vmax=vmax))
    sm.set_array([])
    cbar = fig.colorbar(sm, ax=axes, orientation="vertical",
                        fraction=0.015, pad=0.02, shrink=0.85)
    cbar.set_label("-log10(p)", fontsize=9)

    plt.tight_layout()
    fig.savefig(out_path, dpi=DPI, bbox_inches="tight")
    plt.close()
    print(f"[ok] {out_path}")

def render(nii_path, out_path, title, cut_coords=None, vmax=None,
           annotate_peak=None, cmap="hot_r"):
    if HAS_NILEARN:
        render_with_nilearn(nii_path, out_path, title,
                            cut_coords=cut_coords, vmax=vmax,
                            annotate_peak=annotate_peak, cmap=cmap)
    else:
        render_with_nibabel(nii_path, out_path, title,
                            annotate_peak=annotate_peak, cmap=cmap)

# ─── Figure 1: Current threat — VERIFIED ──────────────────────────────────────

def fig_current_threat():
    """
    Current threat (reversal) map: 7,473 sig voxels, peak at dACC/SFG.
    Peak MNI (-9, 10, 41.5) — consistent with claimed fear network.
    """
    nii = os.path.join(CACHE_DIR, "run2_currentvalence.nii.gz")
    out = os.path.join(OUT, "fig-current-threat-verified.png")
    render(
        nii, out,
        title="Current threat activates fear network — VERIFIED (Fig 3)",
        cut_coords=(-9, 10, 41.5),
        vmax=4.0,
        annotate_peak="(-9, 10, 41.5) — dACC/SFG",
        cmap="hot_r",
    )

# ─── Figure 2: Prior threat — MISMATCH ────────────────────────────────────────

def fig_prior_threat():
    """
    Prior threat map: only 36 sig voxels, peak at MNI (-9, -92.5, -6).
    This is occipital cortex — NOT the fear network claimed in the paper.
    This is the mismatch that peer review missed.
    """
    nii = os.path.join(CACHE_DIR, "run2_previousvalence.nii.gz")
    out = os.path.join(OUT, "fig-prior-threat-mismatch.png")
    render(
        nii, out,
        title="Prior threat map — MISMATCH: 36 voxels, occipital peak (not fear network as claimed)",
        cut_coords=(-9, -92.5, -6),
        vmax=1.7,
        annotate_peak="(-9, -92.5, -6) — occipital cortex",
        cmap="YlOrRd",
    )


if __name__ == "__main__":
    print(f"nilearn available: {HAS_NILEARN}")
    print(f"NIfTI cache: {CACHE_DIR}")
    print()
    fig_current_threat()
    fig_prior_threat()
    print("All Bouyeure figures done.")
