import * as dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import { pokemonRoutes } from '@routes/pokemon.routes';
import { tipoRoutes } from '@routes/tipos.routes';

dotenv.config();

export const app = express();
const PORT = process.env.API_PORT_LOCAL;
const HOST = process.env.HOST_API;

app.use(express.json());
app.use('/pokemon', pokemonRoutes);
app.use('/type', tipoRoutes);

app.listen(PORT, () => console.log(`API Pokemon ONLINE ${HOST}:${PORT} 🚀`));
