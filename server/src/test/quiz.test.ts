import app from '../app'
import request from 'supertest'
import path from 'path'

describe("POST /create", () => {
  it("should receive success and token with an image", async () => {
    const metadata = {
      author: "Isiah Jordan",
      duration: 30
    };

    const res = await request(app)
      .post("/data/quiz/create")
      .field("name", "algebra")
      .field("metadata", JSON.stringify(metadata))
      .attach("image", path.join(__dirname, "assets/book-test.jpg"));

    expect(res.status).toBe(201);
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

describe("POST /tag/create", () => {
  it('should update db with unique tag name', async () => {
    const res = await request(app).post('/data/quiz/tag/create').send({
      name: "computer science"
    });

    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
    expect(res.body.success).toBe(true);
  });
});

describe("GET /tag/list", () => {
  it('should recieve all tag list', async () => {
    const res = await request(app).get('/data/quiz/tag/list');

    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(res.body.success).toBe(true);
  });
});
