import express from "express";
import getTimestamps from "../db/scripts/getTimestamp.js";
import addTimestamp from "../db/scripts/addTimestamp.js";

const router = express.Router();

router.get("/", async function (req, res) {
  const result = await getTimestamps();

  res.json(result);
});

router.post("/", async function (req, res) {
  const newTimestamp = req.body;
  const result = await addTimestamp(newTimestamp);

  res.json({
    success: true,
    payload: result,
  });
});

export default router;
