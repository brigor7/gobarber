import { Router, Response } from 'express';

const sessionsRouter = Router();

sessionsRouter.get('/', async (_, response: Response) => {
  try {
    return response.json({ message: 'routes sessions ok!' });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionsRouter;
