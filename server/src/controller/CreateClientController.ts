import { Request, Response } from 'express';
import { CreateClientService } from '../services/CreateClientService';

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, email, contact } = request.body;

    const service = new CreateClientService();

    const category = await service.execute({ name, email, contact });

    return response.json(category);
  }
}