import { Request, Response } from 'express';
import { TipoService } from '@service/tipo.service';

export class TipoController {
  private tipoService: TipoService;

  constructor() {
    this.tipoService = new TipoService();
  }
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const tipo = await this.tipoService.getAll();
      return res.status(200).json(tipo);
    } catch {
      return res.status(400).json({ message: 'Type not found' });
    }
  }

  async getTypeById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const numericId = parseInt(id, 10);
      const tipo = await this.tipoService.getId(numericId);

      if (!tipo) {
        res.status(404).json({ message: 'Type not found!' });
      }

      return res.status(200).json(tipo);
    } catch {
      return res.status(400).json({ message: 'Internal Error!' });
    }
  }

  async getTypeByName(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;
    const tipo = await this.tipoService.getName(name);
    try {
      if (!tipo) {
        res.status(404).json({ message: 'Type not found!' });
      }
      return res.status(200).json(tipo);
    } catch {
      return res.status(400).json({ message: 'Internal Error!' });
    }
  }

  async createTypes(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    try {
      if (!data) {
        return res.status(404).json({ message: 'Data not found' });
      }

      const created_tipo = this.tipoService.create(data);
      return res.status(201).json(created_tipo);
    } catch {
      return res.status(400).json({ messagem: 'Erro on Creating Type' });
    }
  }

  async createManyType(req: Request, res: Response): Promise<Response> {
    const data = req.body.types;
    try {
      if (!data) {
        return res.status(404).json({ message: 'Data not found' });
      }

      const created_tipo = this.tipoService.createMany(data);
      return res.status(201).json(created_tipo);
    } catch {
      return res.status(400).json({ messagem: 'Erro on Creating Many Type' });
    }
  }

  async updateType(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body;
    try {
      const numericId = parseInt(id, 10);
      const updated_tipo = await this.tipoService.update(numericId, data);

      return res.status(200).json(updated_tipo);
    } catch {
      return res.status(400).json({ message: 'Erro on Updating Tyoe' });
    }
  }
  async deleteType(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const numericId = parseInt(id, 10);
      const id_deleted = this.tipoService.delete(numericId);
      return res.status(200).json(id_deleted);
    } catch (error: any) {
      if (error.message.includes('not found')) {
        return res.status(404).json({ error: error.message });
      } else {
        console.error(error);
        return res.status(400).json({ error: 'Internal server error' });
      }
    }
  }
}
