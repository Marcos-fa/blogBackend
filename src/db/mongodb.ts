import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
    try {
        const URI = "mongodb://localhost/blog";
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;