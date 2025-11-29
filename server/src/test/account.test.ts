import app from '../app'
import request from 'supertest'

describe("POST /register", () => {
  it('should reflect success and update table', async () => {
    const res = await request(app).post('/data/account/register').send({
      email: "jjordsg03@gmail.com",
      username: "Noobcoder212",
      password: "1234"
    });
    
    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
    expect(res.body.success).toBe(true);
  });
});

describe("POST /login", () => {
  it('should recieve the success and token', async () => {
    const res = await request(app).post('/data/account/login').send({
      email: "jjordsg03@gmail.com",
      password: "1234"
    });

    const cookies = res.headers["set-cookie"];
    
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(cookies).toBeDefined();
    expect(res.body.success).toBe(true);
  });
});
