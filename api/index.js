import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cors from 'cors'
mongoose
  .connect("mongodb://127.0.0.1:27017/hackrunew", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch(() => console.log(console.error));
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3001, (req, res) => {
  console.log("port running on 3001");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
