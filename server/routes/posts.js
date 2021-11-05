import express from 'express';
const router = express.Router();

import {getAllPosts, addPosts, updatePost } from '../controllers/posts.js'

router.get('/', getAllPosts);
router.post('/', addPosts);
router.patch('/:id',updatePost);



export default router;