import mongoose from "mongoose";
import { IBlog } from "../interfaces/IBlog"; // Import the IBlog interface

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Blog: mongoose.Model<IBlog> = mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;