import { Router } from 'express';
import { GetAll, GetById ,Post, Delete, Edit, GetByQuantity, GetByOptionName} from '../../Controllers/Public/OptionController';

const routes = Router();

routes.post("/", Post);
routes.get("/", GetAll);
routes.get("/:id", GetById);
routes.put("/:id", Edit);
routes.delete("/:id", Delete);
routes.get("/quantidade/:quantidade", GetByQuantity);
routes.get("/option-name/:type", GetByOptionName)

export default routes;