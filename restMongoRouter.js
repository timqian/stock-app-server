import { Router } from 'express';
import restify from 'express-restify-mongoose';

import Stocks from './models/Stocks';
import BigMoneys from './models/BigMoneys';
import Events from './models/Events';

const router = new Router();

restify.serve(router, Stocks);

restify.serve(router, BigMoneys);

restify.serve(router, Events);

export default router;
