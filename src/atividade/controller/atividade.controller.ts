import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
  BadRequestException,
} from "@nestjs/common";
import { CreateAtividadeDto } from "../dto/create-atividade.dto";
import { UpdateAtividadeDto } from "../dto/update-atividade.dto";
import { AtividadeService } from "../service/atividade.service";

@Controller('atividade')
export class AtividadeController {
  constructor(private readonly atividadeService: AtividadeService) {}

  @Post()
  async create(@Body() createDto: CreateAtividadeDto) {
    return await this.atividadeService.create(createDto);
  }

  @Get()
  async findAll() {
    return await this.atividadeService.findAll();
  }

  @Get("evento/:eventoId")
  async findByEvento(@Param("eventoId") eventoId: string) {
    const parsedId = parseInt(eventoId, 10);
    if (isNaN(parsedId)) {
      throw new BadRequestException("ID de evento inválido. O ID deve ser um número.");
    }
    return await this.atividadeService.findByEvento(parsedId);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      throw new BadRequestException("ID inválido. O ID deve ser um número.");
    }
    return await this.atividadeService.findOne(parsedId);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateDto: UpdateAtividadeDto) {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      throw new BadRequestException("ID inválido. O ID deve ser um número.");
    }
    return await this.atividadeService.update(parsedId, updateDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      throw new BadRequestException("ID inválido. O ID deve ser um número.");
    }
    return await this.atividadeService.delete(parsedId);
  }
}