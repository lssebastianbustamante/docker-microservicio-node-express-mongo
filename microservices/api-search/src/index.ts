import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const MONGO_URL = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('MongoDB Connected - Search'))
  .catch(err => console.log(err));

const server = http.createServer(app);
const {MONGO_HOST, MONGO_PORT, MONGO_DB} = process.env
console.log(MONGO_HOST, MONGO_PORT, MONGO_DB)

server.listen(8080, () => {
  console.log(`Server running on http://localhost:8080`);
});
