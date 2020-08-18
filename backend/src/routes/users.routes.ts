import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  try {
    return response.send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
