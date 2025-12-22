from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
from typing import Annotated
from pathlib import Path
import os
import shutil

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

router = APIRouter(
    prefix="/files",
    tags=["files"]
)

@router.get("/{filename}")
async def get_file(filename: str):
    file_path = UPLOAD_DIR / filename

    if not file_path.exists():
        raise HTTPException(status_code=404, detail="File not found")

    return FileResponse(file_path)

@router.post("/upload/single")
async def upload(file: UploadFile = File(...)):
    if file.filename == "":
        raise HTTPException(status_code=400, detail="No selected file")
    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "size": file.size,
        "location": str(file_path)
    }
