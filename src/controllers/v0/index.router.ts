import { Router, Request, Response } from 'express';
import { FeedRouter } from './feed/routes/feed.router';
import { UserRouter } from './users/routes/user.router';

const router: Router = Router(); // instantiate A Router object - similar to app but for a smaller module of endpoints.

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;