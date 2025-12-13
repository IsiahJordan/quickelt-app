from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter

from .utils.file import read_json 
from .routers.question import schema as question_schema

config: dict = read_json("settings.json")

question_router = GraphQLRouter(question_schema)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=config["cors"]["origins"],
    allow_credentials=config["cors"]["credentials"],
    allow_methods=config["cors"]["methods"],
    allow_headers=config["cors"]["headers"]
)

app.include_router(question_router, prefix="/api/question")
