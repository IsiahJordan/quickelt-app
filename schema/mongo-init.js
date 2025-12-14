db = db.getSiblingDB('quicklet');

db.questions.insertMany([{
  quizId: "q1",
  description: "What is 2 + 2?",
  options: ["1","2","3","4"],
  answer: 3
}]);

