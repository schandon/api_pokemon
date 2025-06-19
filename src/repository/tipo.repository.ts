import { PrismaClient } from '@prisma/client';
import { ITipo } from '@dto/tipo.dto';

const prisma = new PrismaClient();

export class TipoRepository {
  async findAll(): Promise<ITipo[]> {
    return await prisma.tipo.findMany();
  }

  async findById(id: number): Promise<ITipo | null> {
    return await prisma.tipo.findUnique({
      where: { id },
    });
  }

  async findByName(name: string): Promise<ITipo | null> {
    return await prisma.tipo.findFirst({
      where: { name },
    });
  }

  async save(data: ITipo): Promise<ITipo> {
    return await prisma.tipo.create({
      data: {
        id: data.id,
        name: data.name,
      },
    });
  }

  async saveMany(data: ITipo[]) {
    return await prisma.tipo.createMany({
      data: data,
    });
  }

  async delete(id: number): Promise<void> {
    try {
      await prisma.tipo.delete({ where: { id: id } });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new Error(`Tipo with id ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, data: ITipo): Promise<ITipo> {
    return await prisma.tipo.update({
      where: { id },
      data: {
        name: data.name,
      },
    });
  }
}
