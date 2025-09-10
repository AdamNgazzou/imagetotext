import re

def clean_text(text):

    # Remove unwanted characters (keeping letters, numbers, and basic punctuation)
    cleaned_text = re.sub(r'[^\w\s.,!?-]', '', text)

    # Replace multiple spaces with a single space
    cleaned_text = re.sub(r'\s+', ' ', cleaned_text).strip()

    return(cleaned_text)