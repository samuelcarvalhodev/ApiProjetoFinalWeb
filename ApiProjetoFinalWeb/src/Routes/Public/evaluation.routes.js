import { Router } from 'express';
import {GetAll, GetById, Post, Dell, Edit} from '../../Controllers/Public/EvaluationController';

const routes = Router();

routes.post("/", Post);
routes.get("/", GetAll);
routes.get("/:id", GetById);
routes.put("/:id", Edit);
routes.delete("/:id", Dell);

export default routes;