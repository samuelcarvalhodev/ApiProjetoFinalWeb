import { Router } from 'express';
import {Post} from '../Controllers/Global/UserController';
import {Login, LoginPool} from '../Controllers/Global/AuthController';


const routes = Router();

routes.get("/", (get)=>{
    console.log("Conexão bem sucedida!");
})

routes.post("/", Post);
routes.post("/login", Login);

export default routes;