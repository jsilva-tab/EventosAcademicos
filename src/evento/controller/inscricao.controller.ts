import { Controller, Post, Get, Delete, Param, Body } from "@nestjs/common";
import { CreateInscricaoDto } from "src/pessoas/dtos/create-inscrição.dto";
import { InscricaoService } from "../service/inscriçao.service";  // Corrigi o nome do arquivo

@Controller("inscricoes")
export class InscricaoController {
  constructor(private readonly inscricaoService: InscricaoService) {}

  @Post()
  async create(@Body() createDto: CreateInscricaoDto) {
    return this.inscricaoService.inscreverPessoa(
      createDto.evento_id,
      createDto.pessoa_id
    );
  }

  @Get("pessoa/:pessoaId")
  async findByPessoa(@Param("pessoaId") pessoaId: string) {
    return this.inscricaoService.findInscricoesPorPessoa(+pessoaId); // A conversão do parâmetro é feita aqui
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.inscricaoService.findOne(+id); // A conversão do parâmetro é feita aqui
  }

  @Delete(":id")
  async cancelar(@Param("id") id: string) {
    return this.inscricaoService.cancelarInscricao(+id); // A conversão do parâmetro é feita aqui
  }
}