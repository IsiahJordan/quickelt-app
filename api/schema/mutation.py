import strawberry

from typing import List
from ..utils import db

from .types import QuestionInput, Question, AnswerInput, Answer
from datetime import datetime, timezone

@strawberry.type
class Mutation:
    @strawberry.mutation
    def set_question(self, input: QuestionInput) -> Question:
        doc = {
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

    @strawberry.mutation
    def set_answer(self, input: AnswerInput) -> Answer:
        doc = {
            "questions": input.questions,
            "answers": input.answers,
            "score": input.score,
            "total": input.total,
            "created_at": datetime.now(timezone.utc)
        }

        result = db.insert_table("answers", doc)
        return Answer(
            id=str(result.inserted_id),
            questions=input.questions,
            answers=input.answers,
            score=input.score,
            total=input.total,
            createdAt=input.created_at
        )
