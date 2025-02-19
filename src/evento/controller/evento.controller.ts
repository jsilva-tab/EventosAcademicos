import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { CreateEventoDto } from "../dto/create-evento.dto";
import { UpdateEventoDto } from "../dto/update-evento.dto";
import { EventoService } from "../service/evento.service";

@Controller("eventos")
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // Retorna status 201 (Created) ao criar um recurso
  async create(@Body() createDto: CreateEventoDto) {
    return this.eventoService.create(createDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK) // Retorna status 200 (OK) por padrão, mas pode ser explícito
  async findAll() {
    return this.eventoService.findAll();
  }

  @Get("ativos")
  @HttpCode(HttpStatus.OK)
  async findActive() {
    return this.eventoService.findEventosAtivos();
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  async findOne(@Param("id") id: string) {
    return this.eventoService.findOne(+id);
  }

  @Patch(":id")
  @HttpCode(HttpStatus.OK)
  async update(@Param("id") id: string, @Body() updateDto: UpdateEventoDto) {
    return this.eventoService.update(+id, updateDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT) // Retorna status 204 (No Content) ao deletar um recurso
  async remove(@Param("id") id: string) {
    return this.eventoService.cancelarEvento(+id);
  }
}