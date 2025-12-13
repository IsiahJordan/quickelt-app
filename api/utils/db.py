from pymongo import MongoClient
from typing import Union, Dict, Any

client = MongoClient("mongodb://localhost:27017/")
db = client["quicklet"]

def get_collection(collection: str):
    return db[collection]

def insert_table(collection: str, document: Dict[str, Any]):
    col = get_collection(collection)
    return col.insert_one(document)

def one_select_table(collection: str, filter_query: Dict[str, Any] = {}):
    col = get_collection(collection)
    return col.find_one(filter_query)

def many_select_table(collection: str, filter_query: Dict[str, Any] = {}):
    col = get_collection(collection)
    return list(col.find(filter_query))
