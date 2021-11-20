import { Router } from "express";

import  CharacterController  from "./controller/CharacterController";
import ComicController from "./services/ComicController";

const routes = Router();

routes.get("/character", CharacterController.index);
routes.get("/character/:id", CharacterController.show)

routes.get("/comic/:id", ComicController.show)
export default routes;
