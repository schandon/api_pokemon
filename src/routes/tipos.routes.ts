import { Router } from 'express';
import { TipoController } from '@controller/tipo.controller';

const tipoRoutes = Router();
const tipoController = new TipoController();

tipoRoutes.get('/', async (req, res) => {
  await tipoController.getAll(req, res);
});
tipoRoutes.get('/:id', async (req, res) => {
  await tipoController.getTypeById(req, res);
});
tipoRoutes.get('/name/:name', async (req, res) => {
  await tipoController.getTypeByName(req, res);
});
tipoRoutes.post('/', async (req, res) => {
  await tipoController.createTypes(req, res);
});
tipoRoutes.post('/many', async (req, res) => {
  await tipoController.createManyType(req, res);
});
tipoRoutes.put('/:id', async (req, res) => {
  await tipoController.updateType(req, res);
});
tipoRoutes.delete('/:id', async (req, res) => {
  await tipoController.deleteType(req, res);
});

export { tipoRoutes };
