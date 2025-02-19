import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from "@nestjs/common";
import { Evento } from "src/shared/evento.entity";
import { TipoEvento } from "src/shared/tipoevento.entity";
import { Repository } from "typeorm";
import { EventoService } from "./evento.service";
import { UpdateTipoEventoDto } from "../dto/updateTipoEvento.dto";

@Injectable()
export class TipoEventoService {
  private tipoEventoRepository: Repository<TipoEvento>;
  private eventoRepository: Repository<Evento>;

  async update(
    id: number,
    updateDto: UpdateTipoEventoDto
  ): Promise<TipoEvento> {
    const tipo = await this.findOne(id);
    const emUso = await this.eventoRepository.exists({
      where: { tipoEvento: { id } },
    });

    if (emUso)
      throw new ForbiddenException(
        "Tipo de evento já está em uso e não pode ser alterado"
      );

    return this.tipoEventoRepository.save(Object.assign({}, tipo, updateDto));
  }
  async findOne(id: number): Promise<TipoEvento> {
    const tipo = await this.tipoEventoRepository.findOne({
      where: { id },
    });

    if (!tipo) {
      throw new NotFoundException(`Tipo de evento com ID ${id} não encontrado`);
    }

    return tipo;
  }
  async findAll(): Promise<TipoEvento[]> {
    return this.tipoEventoRepository.find();
  }
}
