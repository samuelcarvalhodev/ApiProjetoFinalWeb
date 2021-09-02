import { Router } from 'express';
import {GetAll, GetById, Post, Delete, Edit, GetByQuantity, GetByEvaluationType} from '../../Controllers/Public/EvaluationController';

const routes = Router();

routes.post("/", Post);
routes.get("/", GetAll);
routes.get("/:id", GetById);
routes.put("/:id", Edit);
routes.delete("/:id", Delete);
routes.get("/quantidade/:quantidade", GetByQuantity);
routes.get("/evaluation-type/:type", GetByEvaluationType)

export default routes;