import { PrismaClient } from '@prisma/client';
import { IPokemon } from '../dto/pokemon.dto';

const prisma = new PrismaClient();

export class PokemonRepository {
  async findAll(): Promise<IPokemon[]> {
    return await prisma.pokemon.findMany();
  }

  async findById(id: number): Promise<IPokemon | null> {
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

  async saveMany(data: IPokemon[]) {
    return await prisma.pokemon.createMany({
      data: data,
    });
  }

  async delete(id: number): Promise<void> {
    try {
      await prisma.pokemon.delete({ where: { id: id } });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new Error(`Tipo with id ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, data: IPokemon): Promise<IPokemon> {
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
