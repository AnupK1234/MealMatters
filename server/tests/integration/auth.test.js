const request = require("supertest");
// let server;
let server = require("../../app");
const user = require("../../model/user");
const passwordReset = require("../../model/passwordReset");
describe("/auth", () => {
  describe("/register", () => {
    it("should return a statuscode of 201 if new user", async () => {
      await user.deleteOne({ email: "ccccccccccccccccccccc" });
      const result = await request(server).post("/auth/register").send({
        email: "ccccccccccccccccccccc",
        username: "dddddcccccddddddddddd",
        phone: "1234565567899867",
        password: "cccccccccccccc",
        isAdmin: false,
      });
      expect(result.statusCode).toBe(201);
    });

    it("should return a statuscode of 500 user already exists", async () => {
      const result = await request(server).post("/auth/register").send({
        email: "dddddddddddddddddddddd",
        username: "dddddddddddddddd",
        phone: "123456556789",
        password: "ddddddddddddddd",
        isAdmin: false,
      });
      expect(result.statusCode).toBe(500);
    });
  });

  describe("/login", () => {
    it("should log in a user and return a token", async () => {
      const loginResult = await request(server).post("/auth/login").send({
        email: "ccccccccccccccccccccc",
        password: "cccccccccccccc",
      });

      expect(loginResult.statusCode).toBe(200);
    });

    it("should return a status code 500 for incorrect credentials", async () => {
      const result = await request(server).post("/auth/login").send({
        email: "nonexistentuser@example.com",
        password: "incorrectpassword",
      });

      expect(result.statusCode).toBe(500);
      expect(result.body).toBe("User credentials are wrong!");
    });
  });

  describe("/reset-password", () => {
    it("should return reset data for a valid token", async () => {
      const { token } = await passwordReset.findOne({});
      const result = await request(server).get(
        `/auth/reset-password?token=${token}`
      );

      expect(result.statusCode).toBe(200);
    });

    it("should return 404 for an invalid token", async () => {
      const invalidToken = "invalid_token";
      const result = await request(server).get(
        `/auth/reset-password?token=${invalidToken}`
      );
      expect(result.statusCode).toBe(404);
    });

    // Add more test cases as needed
  });

  describe("/forgot-password", () => {
    it("should send a reset password link for a valid email", async () => {
      // Assuming you have a user document with a valid email in your database

      const result = await request(server).post("/auth/forgot-password").send({
        email: "dddddddddddddddddddddd",
      });

      expect(result.statusCode).toBe(201);
      // Add more assertions as needed
    });

    it("should return 400 for an invalid email", async () => {
      const result = await request(server).post("/auth/forgot-password").send({
        email: "zzzzzzz",
      });

      expect(result.statusCode).toBe(400);
      // Add more assertions as needed
    });

    // Add more test cases as needed
  });

  describe("/reset-password", () => {
    it("should update the user's password with a valid token and matching passwords", async () => {
      const { token } = await passwordReset.findOne({});

      const result = await request(server)
        .post(`/auth/reset-password?token=${token}`)
        .send({
          password: "ooooooccoo",
          c_password: "nnnnddnnnn",
        });

      expect(result.statusCode).toBe(200);
    });

    it("should return 404 for an invalid token", async () => {
      const invalidToken = "invalid_token";

      const result = await request(server)
        .post(`/auth/reset-password?token=${invalidToken}`)
        .send({
          password: "new_password",
          c_password: "new_password",
        });

      expect(result.statusCode).toBe(404);
    });
  });
});
