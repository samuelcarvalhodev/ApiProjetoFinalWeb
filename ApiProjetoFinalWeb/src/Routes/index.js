import { Router } from 'express';
import {GetAll, GetById, Post, Dell, Edit} from '../Controllers/Global/UserController';
import {Login} from '../Controllers/Global/AuthController';
import Option from './Public/option.routes';
import Evaluation from './Public/evaluation.routes';
import Menu from './Admin/menu.routes';


const routes = Router();
routes.use("/option", Option);
routes.use("/evaluation", Evaluation);
routes.use("/menu", Menu);

routes.post("/", Post);
routes.get("/", GetAll)
routes.get("/:id", GetById)
routes.post("/login", Login);
routes.delete("/:id", Dell);
routes.put("/:id", Edit);

export default routes;