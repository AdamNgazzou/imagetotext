# 🖼️ Image to Text Extraction

A **full-stack web application** for **extracting text from images (OCR)** using **Tesseract-OCR**.  
This project provides an **end-to-end solution** for uploading images, running **AI-powered OCR**, and viewing the extracted text in your browser.

---

## 🚀 Features

- 📤 Upload images (**JPEG, PNG, WEBP, etc.**)
- 🤖 Text extraction using Tesseract OCR
- ⚡ Backend powered by **FastAPI**
- 🌐 Frontend built with **Next.js**
- 🔌 REST API for easy integration

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React  
- **Backend:** FastAPI, Uvicorn  
- **OCR Engine:** Tesseract-OCR (via pytesseract)  
- **Deployment:** Vercel (frontend) & Docker/Render/Railway/AWS (backend)  

---

## ⚙️ Getting Started

### ✅ Prerequisites
- Python **3.10+**  
- Node.js **18+**  
- npm or yarn  
- [pip](https://pip.pypa.io/en/stable/)  
- **Tesseract-OCR** installed ([Download](https://github.com/tesseract-ocr/tesseract/wiki#installing-tesseract))

---

### 🔧 Backend Setup

```bash
# Install Python dependencies
pip install -r requirements.txt

# Make sure Tesseract-OCR is installed on your system
# For Ubuntu/Debian (if using Docker):
sudo apt-get update && sudo apt-get install -y tesseract-ocr

# Run backend server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---

### 🔧 Frontend Setup

```bash
cd frontend
npm install

# Run the app
npm run dev
```

---

### 🐳 Docker Deployment

```dockerfile
FROM python:3.10-slim

# Install Tesseract
RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    libtesseract-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
CMD ["python", "main.py"]
```

---

### 📂 Project Structure

```bash
backend/
  main.py                # FastAPI server entry point
  requirements.txt       # Python dependencies
  .dockerfile            # Dockerfile for backend deployment
  test_requests.py       # Script for testing API endpoints
  model/
    model.py             # OCR logic using pytesseract
  utils/
    image.py             # Image loading utility
    clean_text.py        # Text cleaning utility

frontend/
  components/
    image-upload.tsx     # React component for image upload and OCR request
  # (other frontend files, e.g., pages, styles, config, etc.)

# Additional files may exist (e.g., .env, README.md, etc.)
```
---

## 📡 API Usage

### 🔹 Endpoint  
**POST** `/v1/extract-text`

### 🔹 Request Body  
- **Content-Type:** `multipart/form-data`  
- **Field:** `file` → Image file (`.jpg`, `.png`, `.webp`, etc.)

### 🔹 Example Response  
```json
{
  "extracted_text": "This is the text found in your image."
}
```

---

### 🧪 Quick API Test

You can test your backend endpoints using the provided script:

```bash
python [test_requests.py](http://_vscodecontentref_/0)
```

- Make sure to replace "image.webp" in the script with your own image file path.
- The script will print the server status and the OCR result for your image.


---

## 📝 Notes

- **Tesseract-OCR** must be installed on the backend server for OCR to work.
- For Docker, the installation command is included in the Dockerfile.
- The frontend communicates with the backend via REST API for text extraction.

---

## 📚 References

- [Tesseract-OCR Installation Guide](https://github.com/tesseract-ocr/tesseract/wiki)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js Documentation](https://nextjs.org/docs)
