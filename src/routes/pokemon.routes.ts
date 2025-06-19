import { Router } from 'express';
import { PokemonController } from '../controller/pokemon.controller';

const pokemonRoutes = Router();
const pokemonController = new PokemonController();

pokemonRoutes.get('/', async (req, res) => {
  await pokemonController.getAll(req, res);
});
pokemonRoutes.get('/:id', async (req, res) => {
  await pokemonController.getPokemonById(req, res);
});
pokemonRoutes.post('/', async (req, res) => {
  await pokemonController.createPokemon(req, res);
});
pokemonRoutes.post('/many', async (req, res) => {
  await pokemonController.createManyPokemon(req, res);
});
pokemonRoutes.put('/:id', async (req, res) => {
  await pokemonController.updatePokemon(req, res);
});
pokemonRoutes.delete('/:id', async (req, res) => {
  await pokemonController.deletePokemon(req, res);
});

export { pokemonRoutes };
