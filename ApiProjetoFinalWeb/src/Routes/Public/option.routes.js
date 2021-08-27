import { Router } from 'express';
import { GetAll, GetById ,Post, Dell, Edit, Quantidade} from '../../Controllers/Public/OptionController';

const routes = Router();

routes.post("/", Post);
routes.get("/", GetAll);
routes.get("/:id", GetById);
routes.put("/:id", Edit);
routes.delete("/:id", Dell);
routes.get("/quantidade/:quantidade", Quantidade);

export default routes;