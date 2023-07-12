import express from "express";
import * as data from "../data/legalease-code-test-api.json";

const router = express.Router();

router.get("/:regionId", async (req, res) => {
  if (req.params.regionId !== "170") {
    res
      .status(500)
      .send(
        `regionId is not valid, expected "170", got ${req.params.regionId}`,
      );
  } else {
    res.status(200).json(data);
  }
});

export default router;
