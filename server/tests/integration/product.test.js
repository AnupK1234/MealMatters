const request = require("supertest");
let server = require("../../app");
const user = require("../../model/User.js");
const { default: mongoose } = require("mongoose");
const product = require("../../model/product");

let userToken;
let adminTOken;

describe("/product", () => {
  beforeAll(async () => {
    await request(server).post("/auth/register").send({
      email: "e",
      username: "e",
      phone: "98765432",
      password: "eeeeeeeee",
      isAdmin: false,
    });

    await request(server).post("/auth/register").send({
      email: "f",
      username: "f",
      phone: "98734432",
      password: "ffffffff",
      isAdmin: true,
    });

    const userOne = await request(server).post("/auth/login").send({
      email: "e",
      password: "eeeeeeeee",
    });

    const admin = await request(server).post("/auth/login").send({
      email: "f",
      password: "ffffffff",
    });
    userToken = userOne.body.token;
    adminTOken = admin.body.token;
  });

  afterAll(async () => {
    await user.deleteOne({ email: "e" });
  });

  describe("GET/", () => {
    it("should return 200 based on input query", async () => {
      const result = await request(server)
        .get(`/product`)
        .set("Authorization", `Bearer ${userToken}`);
      expect(result.statusCode).toBe(200);
    });

    describe("/find/:id", () => {
      it("should return 500 if product id doesn't match ", async () => {
        const objectId = new mongoose.Types.ObjectId();
        const result = await request(server)
          .get(`/product/find/${objectId}`)
          .set("Authorization", `Bearer ${userToken}`);
        expect(result.statusCode).toBe(500);
      });
    });

    describe("/find/:id", () => {
      it("should return 200 if product id  is matched ", async () => {
        const newProduct = await product.create({
          title: "Sample Product",
          desc: "Description of the product.",
          price: 49.99,
          img: "sample-image.jpg",
          review: 4,
          category: "Electronics",
        });

        const result = await request(server)
          .get(`/product/find/${newProduct._id.toHexString()}`)
          .set("Authorization", `Bearer ${userToken}`);

        await product.deleteOne({ _id: newProduct._id });

        expect(result.statusCode).toBe(200);
      });
    });

    describe("/POST", () => {
      it("it should return 201 on sucessful product creation", async () => {
        const result = await request(server)
          .post(`/product`)
          .set("Authorization", `Bearer ${adminTOken}`)
          .send({
            title: "Sample Product",
            desc: "Description of the product.",
            price: 49.99,
            img: "sample-image.jpg",
            review: 4,
            category: "Electronics",
          });
        expect(result.statusCode).toBe(201);
        await product.deleteOne({ _id: result.body._id });
      });
    });
  });
});
