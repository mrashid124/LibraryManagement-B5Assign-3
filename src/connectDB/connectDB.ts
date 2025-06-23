import mongoose from "mongoose";
import config from "../config";

export const connectDB = async () => {
  try {
    const connec = await mongoose.connect(config.database_url!);
    console.log(`Database Connected: ${connec.connection.host}`);
  } catch (error:any) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};
