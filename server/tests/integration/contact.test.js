const request = require("supertest");
let server;
describe("contact-us", () => {
  beforeEach(() => {
    server = require("../../app");
  });
  afterEach(async () => {
    await server.close();
  });
  describe("/", () => {
    it("should return a statuscode of 200 if body have object", async () => {
      const result = await request(server).post("/contact-us/").send({
        name: "b",
        email: "b",
        subject: "b",
      });
      expect(result.statusCode).toBe(200);
    });

    it("should return a statuscode of 400 if no body is send", async () => {
      const result = await request(server).post("/contact-us/").send({});
      expect(result.statusCode).toBe(400);
    });
  });
});
