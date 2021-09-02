import { Router } from 'express';

import {GetAll, GetById, Post, Delete, Edit, GetByQuantity, GetByTypeOption} from '../../Controllers/Admin/MenuController';

import multer  from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads/');
    },
    filename: function (req, file, cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
})

const filterType = (req, file, cb) => {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
        {
            cb(null, true);
        }else
        {cb(null, false);}
    }



const upload = multer({ 
    storage: storage,
    fileFilter: filterType
 })
const routes = Router();

routes.post("/",upload.single('image_food'), Post);
routes.get("/", GetAll);
routes.get("/:id", GetById);
routes.delete("/:id", Delete);
routes.put("/:id", Edit);
routes.get("/quantidade/:quantidade", GetByQuantity);
routes.get("/option/:type", GetByTypeOption)

export default routes;