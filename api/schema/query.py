import strawberry

from typing import List
from ..utils import db

from .types import Question

@strawberry.type
class Query:
    @strawberry.field
    def get_questions(self, id: str) -> List[Question] | None:    
        docs = db.many_select_table("questions", {"quiz_id": id})
        if not docs:
            return None
        return [
            Question(
                id=doc["_id"],
                quizId=doc["quiz_id"],
                description=doc["description"],
                options=doc["options"],
                answer=doc["answer"],
                imageUrl=doc["image_url"]
            )
            for doc in docs
        ]

    

