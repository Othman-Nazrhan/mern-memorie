import Posts from "../models/postSchema.js";
import mongoose from 'mongoose';

export const getAllPosts = async (req, res) => {
  try {
    const post = await Posts.find();
    res.status(200).json(post);
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const addPosts = async (req, res) => {
  const post = req.body;
  const newPost = await new Posts(post);
  try {
    newPost.save()
    res.status(200).json(newPost);
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('no post with that id ');

  const updatePost = await Posts.findByIdAndUpdate(id, post, { new: true })
  res.json(updatePost);
}

export const deletePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: 'no post with that id' });

  await Posts.findByIdAndDelete(id)
  return res.status(404).json({ message: 'post delete successfully' });
}