import mongoose from "mongoose";

export interface IBlog extends mongoose.Document {
    title: string;
    author: string;
    content: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface IBlogToAdd {
    title: string;
    author: string;
    content: string;
    date: Date;
}