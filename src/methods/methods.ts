import { Request, Response } from 'express';
import axios from 'axios';
import { Post } from '../models/post';

export const getAllPosts = async (req: Request, res: Response) => {
    try {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  };
  
  export const getPostById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch post' });
    }
  };