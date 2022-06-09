import { PostgresDataSource } from '../database/data_source';
import { Client } from '../entities/Client';


export class GetAllClientsService {

  async execute() {
    const repo = PostgresDataSource.getRepository(Client);
    
    const clients = await repo.find();
    
    return clients;
  }

}