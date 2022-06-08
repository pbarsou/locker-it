import { Router } from "express";
import { CreateClientController } from "./controller/CreateClientController";

const routes = Router();

routes.post('/clients', new CreateClientController().handle);

export { routes };