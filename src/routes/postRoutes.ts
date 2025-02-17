import { Router } from 'express';
import { controller } from '../controllers/postController';

const router = Router();

router.get('/posts', controller.getAllPosts);
router.get('/posts/:id', controller.getPostById);

export default router;