import express from 'express';
import { getAllPosts, addPosts, updatePost, deletePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', addPosts);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;