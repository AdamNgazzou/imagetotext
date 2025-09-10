from PIL import Image
import torchvision.transforms as transforms
from io import BytesIO

def load_image(image_input):
    if isinstance(image_input, str):
        img = Image.open(image_input).convert("RGB")
    elif isinstance(image_input, bytes):
        img = Image.open(BytesIO(image_input)).convert("RGB")
    else:
        raise ValueError("image_input must be a file path or bytes.")

    return img