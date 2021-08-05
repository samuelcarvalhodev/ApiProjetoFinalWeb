import { Router } from 'express';
import {Post} from '../../Controllers/Admin/MenuController';

const routes = Router();

routes.post("/", Post);

export default routes;