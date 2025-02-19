import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateEventoDto } from "../dto/create-evento.dto";
import { UpdateEventoDto } from "../dto/update-evento.dto";

@Injectable()
export class EventoService {
  private eventos = [];

  create(createDto: CreateEventoDto) {
    const evento = { id: this.eventos.length + 1, ...createDto };
    this.eventos.push(evento);
    return evento;
  }

  findAll() {
    return this.eventos;
  }

  findEventosAtivos() {
    return this.eventos.filter((evento) => evento.ativo);
  }

  findOne(id: number) {
    const evento = this.eventos.find((e) => e.id === id);
    if (!evento) {
      throw new NotFoundException(`Evento com ID ${id} não encontrado.`);
    }
    return evento;
  }

  update(id: number, updateDto: UpdateEventoDto) {
    const evento = this.findOne(id);
    Object.assign(evento, updateDto);
    return evento;
  }

  cancelarEvento(id: number) {
    const evento = this.findOne(id);
    evento.ativo = false; // Marca o evento como cancelado
    return evento;
  }
}