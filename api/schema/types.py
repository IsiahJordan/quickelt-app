import strawberry
from strawberry.scalars import JSON, DateTime

from typing import List, Dict, Any

@strawberry.input
class QuestionInput:
    quizId: str
    description: str
    options: List[str]
    answer: int
    imageUrl: str | None

@strawberry.type
class Question:
    id: str
    quizId: str
    description: str
    options: List[str]
    answer: int
    imageUrl: str | None

@strawberry.input
class AnswerInput:
    questions: List[JSON]
    answers: List[str]
    score: int
    total: int

@strawberry.type
class Answer:
    id: str
    questions: List[JSON]
    answers: List[str]
    score: int
    total: int
    createdAt: DateTime
