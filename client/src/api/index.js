import axois from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axois.get(url);
export const createPost = (newPost) => axois.post(url, newPost);
export const updatePost =(id, updatePost) => axois.patch(`${url}/${id}`, updatePost);
//export const deletePost= () => axois.delete(`${url}/${_id}`);