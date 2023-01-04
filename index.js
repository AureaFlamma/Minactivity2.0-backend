import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import rootRouter from "./routes/rootRouter.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/boobs", rootRouter);
app.listen(PORT, console.log(`Listening on Port ${PORT}`));
