import app from '../app'
import request from 'supertest'
import path from 'path'

describe("POST /upload/image", () => {
  it("should update uploads image", async () => {

    const res = await request(app)
      .post("/data/resource/upload/image")
      .attach("image", path.join(__dirname, "assets/image-test.jpg"));

    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(res.body.success).toBe(true);
    expect(res.body.data.filename).toBeDefined();
  });
});
