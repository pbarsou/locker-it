import { PostgresDataSource } from "../database/data_source";
import { Client } from "../entities/Client";

type ClientUpdateRequest = {
  id_client: string;
  name: string;
  email: string;
  contact: string;
}

export class UpdateClientService {
  async execute({ id_client, name, email, contact }: ClientUpdateRequest) : Promise<Client | Error> {
    const repo = PostgresDataSource.getRepository(Client);

    const client = await repo.findOne({ where: { id: id_client } });
    
    if(!client) {
      return new Error("Client does not exists!")
    }

    client.name = name ? name : client.name; // caso 'name' estiver vazio, mantém o anterior
    client.email = email ? email : client.email;
    client.contact = contact ? contact : client.contact;

    await repo.save(client);

    return client;
  }
}