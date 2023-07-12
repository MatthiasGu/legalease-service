import express from "express";
import request from "supertest";
import firms from "./firms";

const app = express();
app.use(express.json());
app.use("/firms", firms);

describe("/firms routes", () => {
  describe("GET /firms/:_regionId", () => {
    it("returns 500 if regionId is not 170", (done) => {
      request(app).get("/firms/171").set("accept", "json").expect(500, done);
    });

    it("returns 200 if regionId is 170", (done) => {
      request(app).get("/firms/170").set("accept", "json").expect(200, done);
    });

    it("returns json if regionId is 170", async () => {
      const response = await request(app)
        .get("/firms/170")
        .set("accept", "json");
      expect(response.body[0].firm.id).toEqual("960");
      expect(Object.keys(response.body).length).toEqual(9);
    });
  });
});
