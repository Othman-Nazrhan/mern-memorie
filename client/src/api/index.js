import axois from 'axios';

const API = axois.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = () => API.get(url);
export const createPost = (newPost) => API.post(url, newPost);
export const updatePost = (id, updatePost) => API.patch(`${url}/${id}`, updatePost);
export const deletePost = (id) => API.delete(`${url}/${id}`);

export const signin = (formData) => API.post('user/login', formData)
export const signup = (formData) => API.post('user/signup', formData)