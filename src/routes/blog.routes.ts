import { Router } from "express";
import { addPost, getPosts } from "../controllers/blog.controller";

const router: Router = Router();

router.post("/addPost", addPost);
router.get("/getPosts", getPosts);

export default router;
