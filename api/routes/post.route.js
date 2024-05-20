import express from 'express';
import { CreatePost } from '../controllers/post.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, CreatePost);

export default router;