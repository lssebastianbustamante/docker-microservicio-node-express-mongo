import mongoose from "mongoose";
import app from "./index";

const MONGO_URL = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`MongoDB connection successful - Tour DB`);
  } catch (error) {
    console.log(error);
  }
};

connectDB();

app.listen(1111, () => {
  console.log(`Server running on http://localhost:8080`);
});