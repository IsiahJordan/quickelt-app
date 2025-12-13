from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter

from .utils.file import read_json 
from .schema.schema import schema

config: dict = read_json("settings.json")

_schema = GraphQLRouter(schema)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=config["cors"]["origins"],
    allow_credentials=config["cors"]["credentials"],
    allow_methods=config["cors"]["methods"],
    allow_headers=config["cors"]["headers"]
)

app.include_router(_schema, prefix="/graphql")
