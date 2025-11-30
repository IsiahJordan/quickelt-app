import app from '../app'
import request from 'supertest'
import path from 'path'

describe("POST /create", () => {
  it("should receive success and token with an image", async () => {
    const res = await request(app)
      .post("/data/quiz/create")
      .field("name", "algebra")
      .attach("image", path.join(__dirname, "assets/book-test.jpg"));

    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
    expect(res.body.success).toBe(true);
  });
});

describe("GET /list", () => {
  it('should reflect success and update table', async () => {
    const res = await request(app).get('/data/quiz/list').send({
      name: "algebra"      
    });
    
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(res.body.success).toBe(true);
  });
});

