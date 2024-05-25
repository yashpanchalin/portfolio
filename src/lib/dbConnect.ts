import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    // Check if the connection is already established
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI as string, {
      });
      console.log("Database Connected Successfully");
    }
  } catch (error) {
    console.error("Database Connection Error: ", error);
  }
};

export default dbConnect;
