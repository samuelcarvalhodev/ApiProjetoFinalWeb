import { Router } from 'express';
import {GetAll, GetById, Post} from '../../Controllers/Admin/MenuController';

const routes = Router();

routes.post("/", Post);
routes.get("/", GetAll);
routes.get("/:id", GetById);

export default routes;