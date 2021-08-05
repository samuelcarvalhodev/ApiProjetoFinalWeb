import { Router } from 'express';
import {Post} from '../../Controllers/Public/EvaluationController';

const routes = Router();

routes.post("/", Post);

export default routes;