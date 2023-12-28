import { Request, Response } from 'express';
import Blog from "../models/blog.model";
import { IBlogToAdd } from '../interfaces/IBlog';


export const addPost = async (req: Request, res: Response) => {
    try {
      const newBlog: IBlogToAdd = req.body;
      const newPost = new Blog(newBlog);
    await newPost.save();
    res.status(200).json({ message: "Post added" });
  } catch (error: any) {
    console.log('error in addPost: ', error.message)
    res.status(409).json({ message: error.message });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
}
