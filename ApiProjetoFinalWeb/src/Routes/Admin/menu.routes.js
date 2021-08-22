import { Router } from 'express';
import {GetAll, GetById, Post, Dell, Edit} from '../../Controllers/Admin/MenuController';

const routes = Router();

routes.post("/", Post);
routes.get("/", GetAll);
routes.get("/:id", GetById);
routes.delete("/:id", Dell);
routes.put("/:id", Edit);

export default routes;