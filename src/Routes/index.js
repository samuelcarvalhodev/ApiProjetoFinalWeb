import { Router } from 'express';
import {Post} from '../Controllers/Global/UserController';
import {Login} from '../Controllers/Global/AuthController';
import Option from './Public/option.routes';
import Evaluation from './Public/evaluation.routes';
import Menu from './Admin/menu.routes';


const routes = Router();
routes.use("/option", Option);
routes.use("/evaluation", Evaluation);
routes.use("/menu", Menu);

routes.get("/", (get)=>{
    console.log("Conexão bem sucedida!");
})

routes.post("/", Post);
// routes.get("/", Get);
routes.post("/login", Login);


export default routes;