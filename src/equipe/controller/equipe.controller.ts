import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  Patch,
} from "@nestjs/common";
import { CreateEquipeDto } from "../dto/create-equipe.dto";
import { EquipeService } from "../service/equipe.service";
import { UpdateEquipeDto } from "../dto/update-equipe.dto";

@Controller("equipes")
export class EquipeController {
  constructor(private readonly equipeService: EquipeService) {}

  @Post()
  create(@Body() createDto: CreateEquipeDto) {
    return this.equipeService.create(createDto);
  }

  @Get()
  findAll() {
    return this.equipeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    const parsedId = +id; // Converte o ID para número
    if (isNaN(parsedId)) {
      throw new Error("ID inválido. O ID deve ser um número.");
    }
    return this.equipeService.findOne(parsedId);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateDto: UpdateEquipeDto) {
    const parsedId = +id; // Converte o ID para número
    if (isNaN(parsedId)) {
      throw new Error("ID inválido. O ID deve ser um número.");
    }
    return this.equipeService.update(parsedId, updateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    const parsedId = +id; // Converte o ID para número
    if (isNaN(parsedId)) {
      throw new Error("ID inválido. O ID deve ser um número.");
    }
    return this.equipeService.delete(parsedId);
  }

  @Delete("desativar/vazias")
  desativarEquipesVazias() {
    return this.equipeService.desativarEquipesVazias();
  }
}