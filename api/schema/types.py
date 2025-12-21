import strawberry

from typing import List

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
