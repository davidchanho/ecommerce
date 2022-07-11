import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

/**
 * Returns Mongoose connection
 *
 * @returns Mongoose connection
 */
const connectDB = async () => {
    // Set MongoDB uri
    const uri = process.env.MONGO_URI as string;

    try {
        // Set up mongoose connection
        await mongoose.connect(uri);
    } catch (err: any) {
        // Send error
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
