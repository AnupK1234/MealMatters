const request = require("supertest");
const {
  verifyToken,
  verifyTokenAdmin,
} = require("../../../middlewares/verifyToken");
const jwt = require("jsonwebtoken");

describe("verifyToken", () => {
  it("should call next() when a valid token is provided", () => {
    const req = {
      headers: {
        authorization: "Bearer validToken",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();
    jwt.verify = (token, secret, callback) => {
      callback(null, { userId: "123" });
    };

    verifyToken(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it("should return a 403 status when no token is provided", () => {
    const req = {
      headers: {},
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();

    verifyToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
  });

  it("should return a 403 status when invalid token is provided", () => {
    const req = {
      headers: {},
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();
    jwt.verify = (token, secret, callback) => {
      callback({ msg: "Wrong or expired token" }, null);
    };

    verifyToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
  });
});

describe("verifyTokenAdmin", () => {
  it("should return 403 when the use is not admin", () => {
    const req = {
      headers: {
        authorization: "Bearer validToken",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();
    jwt.verify = (token, secret, callback) => {
      callback(null, { userId: "123" });
    };

    verifyTokenAdmin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
  });

  it("should return a 403 status when no token is provided", () => {
    const req = {
      headers: {},
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();

    verifyToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
  });

  it("should return a 403 status when an invalid token is provided", () => {
    const req = {
      headers: {
        authorization: "Bearer invalidToken",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();
    jwt.verify = (token, secret, callback) => {
      callback({ msg: "Wrong or expired token" }, null);
    };

    verifyToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
  });

  it("should return a 403 status when the user is not an admin", () => {
    const req = {
      headers: {
        authorization: "Bearer validToken",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();
    jwt.verify = (token, secret, callback) => {
      callback(null, { userId: "123", isAdmin: false });
    };

    verifyTokenAdmin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
  });

  it("should call next()  when the user  an admin", () => {
    const req = {
      headers: {
        authorization: "Bearer validToken",
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();
    jwt.verify = (token, secret, callback) => {
      callback(null, { userId: "123", isAdmin: true });
    };

    verifyTokenAdmin(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
