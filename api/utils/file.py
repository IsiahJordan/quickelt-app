import json
import os

def read_json(path: str):
    """
        reads json files based on base path
        ** base -> api/ **
    """
    with open(path, "r") as f: 
        return json.load(f)
    
