import strawberry

from typing import List
from ..utils import db

from .types import QuestionInput, Question

@strawberry.type
class Mutation:
    @strawberry.mutation
    def set_question(self, input: QuestionInput) -> Question:
        doc = {
            "quiz_id": input.quizId,
            "description": input.description,
            "answer": input.answer,
            "options": input.options,
            "image_url": input.imageUrl
        }
        result = db.insert_table("questions", doc)
        return Question(
            id=str(result.inserted_id),
            quizId=input.quizId,
            description=input.description,
            answer=input.answer,
            options=input.options,
            imageUrl=input.imageUrl
        )
