const request = require("supertest");
let server = require("../../app");
const user = require("../../model/User.js");
const passwordReset = require("../../model/PasswordReset.js");

describe("/auth", () => {
  describe("/register", () => {
    it("should return a statuscode of 201 if new user", async () => {
      await user.deleteOne({ email: "ccccccccccccccccccccc" });

      const result = await request(server).post("/auth/register").send({
        email: "c",
        username: "c",
        phone: "1234567",
        password: "cccccccccc",
        isAdmin: false,
      });

      await user.deleteOne({ email: "c" });

      expect(result.statusCode).toBe(201);
    });

    it("should return a statuscode of 500 user already exists", async () => {
      await user.create({
        email: "d",
        username: "d",
        phone: "98765433242",
        password: "dddddddddd",
        isAdmin: false,
      });

      const result = await request(server).post("/auth/register").send({
        email: "d",
        username: "d",
        phone: "98765432",
        password: "dddddddddd",
        isAdmin: false,
      });

      await user.deleteOne({ email: "d" });
      expect(result.statusCode).toBe(500);
    });
  });

  describe("/login", () => {
    it("should log in a user and return a token", async () => {
      await request(server).post("/auth/register").send({
        email: "e",
        username: "e",
        phone: "98765432",
        password: "eeeeeeeee",
        isAdmin: false,
      });

      const loginResult = await request(server).post("/auth/login").send({
        email: "e",
        password: "eeeeeeeee",
      });

      await user.deleteOne({ email: "e" });

      expect(loginResult.statusCode).toBe(200);
    });

    it("should return a status code 500 for incorrect credentials", async () => {
      const result = await request(server).post("/auth/login").send({
        email: "nonexistentuser@example.com",
        password: "incorrectpassword",
      });

      expect(result.statusCode).toBe(500);
    });
  });

  describe("/forgot-password", () => {
    it("should send a reset password link for a valid email", async () => {
      await user.create({
        email: "k",
        username: "k",
        phone: "98765645432",
        password: "kkkkkkk",
        isAdmin: false,
      });

      const result = await request(server).post("/auth/forgot-password").send({
        email: "k",
      });

      await user.deleteOne({ email: "k" });
      await passwordReset.deleteOne({});
      expect(result.statusCode).toBe(201);
    });

    it("should return 400 for an invalid email", async () => {
      const result = await request(server).post("/auth/forgot-password").send({
        email: "zzzzzzz",
      });

      expect(result.statusCode).toBe(400);
    });
  });

  describe("/reset-password", () => {
    describe("POST/", () => {
      it("should update the user's password with a valid token and matching passwords", async () => {
        // const { token } = await passwordReset.findOne({});

        const userOne = await user.create({
          email: "g",
          username: "g",
          phone: "98765432",
          password: "gggggggg",
          isAdmin: false,
        });

        const userEx = await passwordReset.create({
          user_id: userOne._id,
          token: "g",
        });
        const result = await request(server)
          .post(`/auth/reset-password?token=${"g"}`)
          .send({
            password: "ooooooccoo",
            c_password: "nnnnddnnnn",
          });

        await passwordReset.deleteOne({ user_id: userOne._id });
        await user.deleteOne({ email: "g" });
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

    describe("GET/", () => {
      it("should return reset data for a valid token", async () => {
        await passwordReset.create({
          user_id: "g",
          token: "g",
        });
        const { token } = await passwordReset.findOne({
          user_id: "g",
        });

        const result = await request(server).get(
          `/auth/reset-password?token=${token}`
        );
        await passwordReset.deleteOne({ user_id: "g" });

        expect(result.statusCode).toBe(200);
      });

      it("should return 404 for an invalid token", async () => {
        const invalidToken = "invalid_token";

        const result = await request(server).get(
          `/auth/reset-password?token=${invalidToken}`
        );

        expect(result.statusCode).toBe(404);
      });
    });
  });
});
