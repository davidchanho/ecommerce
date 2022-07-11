import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const testDB = async () => {
    try {
        await mongoose.connect(process.env.TEST as string);
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

afterAll((done) => {
    mongoose.connection.dropDatabase();
    done();
});

export default testDB;
