import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import getTimestamps from "../db/scripts/getTimestamp.js";

const router = express.Router();

router.get("/", async function (req, res) {
  const result = await getTimestamps();

  res.json(result);
});

// router.get("/", async function (req, res) {
//   console.log("get request coming thru");
//   res.json({ boobs: "titties" });
// });

export default router;
