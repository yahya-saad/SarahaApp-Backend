import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_CONNECTION_URL)
    .then(() => {
      console.log("CONNECTED TO DB");
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB:", error.message);
    });
};
