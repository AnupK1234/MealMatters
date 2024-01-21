const request = require("supertest");
const Contact = require("../../model/Contact");
let server = require("../../app");
describe("contact-us", () => {
  describe("/", () => {
    it("should return a statuscode of 200 if body have object", async () => {
      const result = await request(server).post("/contact-us/").send({
        name: "b",
        email: "b",
        subject: "b",
      });

      expect(result.statusCode).toBe(200);
      await Contact.deleteOne({ name: "b" });
    });

    it("should return a statuscode of 400 if no body is send", async () => {
      const result = await request(server).post("/contact-us/").send({});

      expect(result.statusCode).toBe(400);
    });
  });
});
