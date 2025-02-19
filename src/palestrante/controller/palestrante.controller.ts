import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Query,
  Patch,
} from "@nestjs/common";
import { CreatePalestranteDto } from "../dto/create-palestrante.dto";
import { UpdatePalestranteDto } from "../dto/update-palestrante.dto";
import { PalestranteService } from "../service/palestrante.service";

@Controller("palestrantes")
export class PalestranteController {
  constructor(private readonly palestranteService: PalestranteService) {}

  @Post()
  create(@Body() createDto: CreatePalestranteDto) {
    return this.palestranteService.create(createDto);
  }

  @Get()
  findAll() {
    return this.palestranteService.findAll();
  }

  @Get("buscar")
  findByInstituicao(@Query("instituicao") instituicao: string) {
    return this.palestranteService.findByInstituicao(instituicao);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.palestranteService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDto: UpdatePalestranteDto) {
    return this.palestranteService.update(+id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.palestranteService.delete(+id);
  }
}