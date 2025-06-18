import { PokemonRepository } from '../repository/pokemon.repository';
import { IPokemon } from '../dto/pokemon.dto';

export class PokemonService {
  private pokemonRepository: PokemonRepository;

  constructor() {
    this.pokemonRepository = new PokemonRepository();
  }

  async getAll(): Promise<IPokemon[]> {
    return await this.pokemonRepository.findAll();
  }

  async getId(id: string): Promise<IPokemon | null> {
    return await this.pokemonRepository.findById(id);
  }

  async create(data: IPokemon): Promise<IPokemon> {
    return await this.pokemonRepository.save(data);
  }

  async createMany(data: IPokemon[]) {
    return await this.pokemonRepository.saveMany(data);
  }

  async update(id: string, data: IPokemon): Promise<IPokemon> {
    return await this.pokemonRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this.pokemonRepository.delete(id);
  }
}
