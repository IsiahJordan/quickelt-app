import app from '../app'
import request from 'supertest'

describe("POST /create/quiz/tag", () => {
  it('should reflect in the datababase', async () => {
    const res = await request(app).post('/data/shared/create/quiz/tag').send({
      quizId: "8468026f-fb60-4cb0-8cb0-cd2b356ff73b",
      tagId: 4
    });
    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
    expect(res.body.success).toBe(true);
  });

});
