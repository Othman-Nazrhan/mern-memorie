import axois from 'axios';

const API = axois.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const createPost = (newPost) => API.post(url, newPost);
export const updatePost = (id, updatePost) => API.patch(`${url}/${id}`, updatePost);
export const deletePost = (id) => API.delete(`${url}/${id}`);

export const signin = (formData) => API.post('user/login', formData)
export const signup = (formData) => API.post('user/signup', formData)