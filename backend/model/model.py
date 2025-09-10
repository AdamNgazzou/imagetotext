import pytesseract
from PIL import Image
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
from utils.clean_text import clean_text

def extract_text_from_image(image):
    """
    Extract text from an image using pytesseract.
    :param image: PIL Image object or image file path
    :return: Extracted text as string
    """
    if isinstance(image, str):
        image = Image.open(image)
    raw_text = pytesseract.image_to_string(image)
    return clean_text(raw_text)

