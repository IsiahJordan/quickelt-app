from fastapi.testclient import TestClient
from .service import app

client = TestClient(app)

def test_set_question():
    query = """
    mutation($input: QuestionInput!) {
        setQuestion(input: $input) {
            quizId
            description
            options
            answer
        }
    }
    """

    variables = {
        "input": {
            "quizId": "q1",
            "description": "What is 2+2?",
            "options": ["1", "2", "3", "4"],
            "answer": 3,
        }
    }

    response = client.post("/graphql", json={"query": query, "variables": variables})
    assert response.status_code == 200
    assert response.json()["data"]["setQuestion"]["quizId"] == "q1"


def test_get_questions():
    query = """
        query($id: String!) {
            getQuestions(id: $id) {
                id
                quizId
                description
                options
                answer
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

