from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from utils import load_image
from model import extract_text_from_image
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from dotenv import load_dotenv

app = FastAPI()
frontend_origin = os.getenv("FRONTEND_ORIGIN", "http://localhost:3000")  

app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_origin],  # Uses env variable
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def read_root():
    return {"message": "FastAPI server is running!"}

# Add your endpoints below
@app.post("/v1/extract-text")
async def detect(file: UploadFile = File(...)):
    try:
        # Read image bytes from uploaded file
        image_bytes = await file.read()
        # Load image from bytes
        image = load_image(image_bytes)
        extracted_text = extract_text_from_image(image)
        return JSONResponse(content={
            "extracted_text": extracted_text
        })
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

