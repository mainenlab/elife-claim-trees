FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the extraction package and prompts
COPY elife_extract/ ./elife_extract/
COPY prompts/ ./prompts/
COPY server.py .

ENV ELIFE_PROMPTS_DIR=/app/prompts

EXPOSE 8080
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8080"]
