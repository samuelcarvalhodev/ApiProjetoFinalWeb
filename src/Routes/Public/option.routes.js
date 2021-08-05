import { Router } from 'express';
import {Post} from '../../Controllers/Public/OptionController';

const routes = Router();

routes.post("/", Post);

export default routes;