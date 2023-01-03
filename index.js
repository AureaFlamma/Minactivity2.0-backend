import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = 3000;
const app = express();
app.use(express.json());

app.use(cors());

app.post("/", function (req, res) {
  console.log("boobies");
  res.json({
    success: true,
    payload: "boobsies",
  });
});
// app.use("/email", emailRouter);

app.listen(PORT, console.log(`Listening on Port ${PORT}`));
