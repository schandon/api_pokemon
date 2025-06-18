import { PrismaClient } from '@prisma/client';
import { ITipo } from '../dto/tipo.dto';

const prisma = new PrismaClient();

export class TipoRepository {
  async findAll(): Promise<ITipo[]> {
    return await prisma.tipo.findMany();
  }

  async findById(id: string): Promise<ITipo | null> {
    return await prisma.tipo.findUnique({
      where: { id },
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

  async saveMany(data: ITipo[]): Promise<ITipo> {
    return await prisma.tipo.create({
      data: data,
    });
  }

  async delete(id: string): Promise<void> {
    return await prisma.tipo.delete({ where: { id: id } });
  }

  async update(id: string, data: ITipo): Promise<ITipo> {
    return await prisma.tipo.update({
      where: { id },
      data: {
        name: data.name,
      },
    });
  }
}
