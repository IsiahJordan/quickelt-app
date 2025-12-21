from fastapi.testclient import TestClient
import pytest
from ..service import app
from pathlib import Path

client = TestClient(app)

ASSETS_DIR = Path("tests") / "assets"
TEST_IMAGE = ASSETS_DIR / "test.jpg"

def test_upload():
    try:
        with open(TEST_IMAGE, "rb") as buffer:
            files = {'file': ("test.jpg", buffer, 'image/jpeg')}

            response = client.post("/rest/files/upload/single", files=files)

            assert response.status_code == 200
            assert response.json()["filename"] == "test.jpg"
    except FileNotFoundError:
        pytest.fail(f"test image not found at: {TEST_IMAGE}")
