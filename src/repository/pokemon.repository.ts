import { PrismaClient } from '@prisma/client';
import { IPokemon } from '../dto/pokemon.dto';

const prisma = new PrismaClient();

export class PokemonRepository {
  async findAll(): Promise<IPokemon[]> {
    return await prisma.pokemon.findMany();
  }

  async findById(id: string): Promise<IPokemon | null> {
    return await prisma.pokemon.findUnique({
      where: { id },
    });
  }

  async save(data: IPokemon): Promise<IPokemon> {
    return await prisma.pokemon.create({
      data: {
        id: data.id,
        name: data.name,
        fk_tipo_primario: data.fk_tipo_primario,
        fk_tipo_secundario: data.fk_tipo_secundario,
      },
    });
  }

  async saveMany(data: IPokemon[]): Promise<IPokemon> {
    return await prisma.pokemon.create({
      data: data,
    });
  }

  async delete(id: string): Promise<void> {
    return await prisma.pokemon.delete({ where: { id: id } });
  }

  async update(id: string, data: IPokemon): Promise<IPokemon> {
    return await prisma.pokemon.update({
      where: { id },
      data: {
        name: data.name,
        fk_tipo_primario: data.fk_tipo_primario,
        fk_tipo_secundario: data.fk_tipo_secundario,
      },
    });
  }
}
