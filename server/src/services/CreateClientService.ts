import { PostgresDataSource } from '../database/data_source';
import { Client } from '../entities/Client';

type ClientRequest = {
  name: string;
  email: string;
  contact: string;
}

export class CreateClientService {

  async execute({ name, email, contact }: ClientRequest) : Promise<Client> {
    const repo = PostgresDataSource.getRepository(Client);
    
    const client = repo.create({
      name,
      email,
      contact
    })

    await repo.save(client);
    
    return client;
  }

}