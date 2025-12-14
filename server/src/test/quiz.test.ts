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

describe("GET /fetch", () => {
  it('should recieve the single row', async () => {
    const res = await request(app).get('/data/quiz/fetch').send({
      name: "algebra"      
    });
    
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(res.body.success).toBe(true);
  });
});

describe("GET /list", () => {
  it('should recieve the list all from offset to limit plus offset', async () => {
    const res = await request(app).get('/data/quiz/list').send({
      page: 10,
      limit: 10
    });
    
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(res.body.success).toBe(true);
  });
});

