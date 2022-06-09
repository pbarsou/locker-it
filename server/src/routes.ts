import { Router } from "express";
import { CreateClientController } from "./controller/CreateClientController";
import { GetAllClientsController } from "./controller/GetAllClientsController";
import { DeleteClientController } from "./controller/DeleteClientController";
import { UpdateClientController } from "./controller/UpdateClientController";

const routes = Router();

routes.post('/clients', new CreateClientController().handle);
routes.get('/clients', new GetAllClientsController().handle);
routes.put('/clients/:id', new UpdateClientController().handle)
routes.delete('/clients/:id', new DeleteClientController().handle)

export { routes };