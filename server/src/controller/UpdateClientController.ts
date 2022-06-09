import { Request, Response } from 'express';
import { UpdateClientService } from '../services/UpdateClientService';

export class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { id_client } = request.params;
    const { name, email, contact } = request.body;

    const service = new UpdateClientService();

    const result = await service.execute({ id_client, name, email, contact });

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}