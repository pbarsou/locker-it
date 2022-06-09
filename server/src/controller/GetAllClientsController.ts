import { Request, Response } from 'express';
import { GetAllClientsService } from '../services/GetAllClientsService';

export class GetAllClientsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllClientsService();

    const clients = await service.execute();

    return response.json(clients);
  }
}