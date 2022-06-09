import { PostgresDataSource } from "../database/data_source";
import { Client } from "../entities/Client";


export class DeleteClientService {
  async execute(id_client: string) {
    const repo = PostgresDataSource.getRepository(Client);
    
    if(!await repo.findOne({ where: { id: id_client } })) {
      return new Error("Client does not exists!")
    }

    await repo.delete(id_client);
  }
}