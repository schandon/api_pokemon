import { Request, Response, NextFunction } from 'express';
import { PokemonService } from '../service/pokemon.service';
import { IPokemon } from '../dto/pokemon.dto';

export class PokemonController {
  private pokemonService: PokemonService;

  constructor() {
    this.pokemonService = new PokemonService();
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const pokemon = await this.pokemonService.getAll();
      return res.status(200).json(pokemon);
    } catch {
      return res.status(400).json({ message: 'Empty Pokedex' });
    }
  }

  async getPokemonById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const pokemon = await this.pokemonService.getId(id);

      if (!pokemon) {
        res.status(404).json({ message: 'Pokemon not found!' });
      }

      return res.status(200).json(pokemon);
    } catch {
      return res.status(400).json({ message: 'Internal Error!' });
    }
  }

  async createPokemon(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    try {
      if (!data) {
        return res.status(404).json({ message: 'Data not found' });
      }

      const created_pokemon = this.pokemonService.create(data);
      return res.status(204).json(created_pokemon);
    } catch {
      return res.status(400).json({ messagem: 'Erro on Creating Pokemon' });
    }
  }

  async createManyPokemon(req: Request, res: Response): Promise<Response> {
    const data = req.body.pokemons;
    try {
      if (!data) {
        return res.status(404).json({ message: 'Data not found' });
      }

      const created_pokemon = this.pokemonService.createMany(data);
      return res.status(204).json(created_pokemon);
    } catch {
      return res
        .status(400)
        .json({ messagem: 'Erro on Creating Many Pokemons' });
    }
  }

  async updatePokemon(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;
    try {
      const updated_pokemon = await this.pokemonService.update(id, data);

      return res.status(200).json(updated_pokemon);
    } catch {
      return res.status(400).json({ message: 'Erro on Updating Pokemon' });
    }
  }

  async deletePokemon(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const id_deleted = this.pokemonService.delete(id);
      return res.status(200).json(id_deleted);
    } catch {
      return res.status(400).json({ message: 'Erro on Deleting Pokemon' });
    }
  }
}
