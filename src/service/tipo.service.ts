import { TipoRepository } from '@repository/tipo.repository';
import { ITipo } from '@dto/tipo.dto';

export class TipoService {
  private tipoRepository: TipoRepository;

  constructor() {
    this.tipoRepository = new TipoRepository();
  }

  async getAll(): Promise<ITipo[]> {
    return await this.tipoRepository.findAll();
  }

  async getId(id: number): Promise<ITipo | null> {
    return await this.tipoRepository.findById(id);
  }

  async getName(name: string): Promise<ITipo | null> {
    return await this.tipoRepository.findByName(name);
  }

  async create(data: ITipo): Promise<ITipo> {
    return await this.tipoRepository.save(data);
  }

  async createMany(data: ITipo[]) {
    return await this.tipoRepository.saveMany(data);
  }

  async update(id: number, data: ITipo): Promise<ITipo> {
    return await this.tipoRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.tipoRepository.delete(id);
  }
}
