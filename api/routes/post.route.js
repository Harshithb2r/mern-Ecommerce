import express from 'express';
import { CreatePost, deletepost, getPosts } from '../controllers/post.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, CreatePost);
router.get('/getposts', getPosts)
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)

export default router;