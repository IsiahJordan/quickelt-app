import strawberry

from typing import List
from ..utils import db

@strawberry.input
class QuestionInput:
    quizId: str
    description: str
    options: List[str]
    answer: int

@strawberry.type
class Question:
    id: str
    quizId: str
    description: str
    options: List[str]
    answer: int

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
                answer=doc["answer"]
            )
            for doc in docs
        ]

@strawberry.type
class Mutation:
    @strawberry.mutation
    def set_question(self, input: QuestionInput) -> Question:
        doc = {
            "quiz_id": input.quizId,
            "description": input.description,
            "answer": input.answer,
            "options": input.options,
        }
        result = db.insert_table("questions", doc)
        return Question(
            id=str(result.inserted_id),
            quizId=input.quizId,
            description=input.description,
            answer=input.answer,
            options=input.options,
        )
    

schema = strawberry.Schema(query=Query, mutation=Mutation)
