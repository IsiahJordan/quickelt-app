from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .utils.file import read_json 

config: dict = read_json("settings.json")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=config["cors"]["origins"],
    allow_credentials=config["cors"]["credentials"],
    allow_methods=config["cors"]["methods"],
    allow_headers=config["cors"]["headers"]
)
