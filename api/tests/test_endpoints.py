from fastapi.testclient import TestClient
from ..service import app

client = TestClient(app)

def test_set_question():
    query = """
    mutation($input: QuestionInput!) {
        setQuestion(input: $input) {
            quizId
            description
            options
            answer
            imageUrl
        }
    }
    """

    variables = {
        "input": {
            "quizId": "8468026f-fb60-4cb0-8cb0-cd2b356ff73b",
            "description": "What is 2+2?",
            "options": ["1", "2", "3", "4"],
            "answer": 3,
            "imageUrl": None
        }
    }

    response = client.post("/graphql", json={"query": query, "variables": variables})
    assert response.status_code == 200
    assert response.json()["data"]["setQuestion"]["quizId"] == "8468026f-fb60-4cb0-8cb0-cd2b356ff73b"


def test_get_questions():
    query = """
        query($id: String!) {
            getQuestions(id: $id) {
                id
                quizId
                description
                options
                answer
                imageUrl
            }
        }         
    """

    variables = {
        "id": "q1"
    }

    response = client.post("/graphql", json={"query": query, "variables": variables})

    questions = response.json()["data"]["getQuestions"]

    assert isinstance(questions, list)
    assert len(questions) > 0
    assert questions[0]["answer"] == 3

