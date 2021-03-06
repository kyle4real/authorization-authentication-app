import mongoose from "mongoose";

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.magenta.underline.bold);
};

export default connectDB;
