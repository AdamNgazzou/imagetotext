import requests

BASE_URL = "http://127.0.0.1:8000"

def get_root():
    response = requests.get(f"{BASE_URL}/")
    print("GET / response:", response.json())

def post_detect(image_path):
    with open(image_path, "rb") as f:
        files = {"file": (image_path, f, "image/jpeg")}
        response = requests.post(f"{BASE_URL}/v1/extract-text", files=files)
        print("POST /detect response:", response.json())

if __name__ == "__main__":
    get_root()
    # Replace 'your_image.jpg' with your test image file path
    post_detect("image.webp")
