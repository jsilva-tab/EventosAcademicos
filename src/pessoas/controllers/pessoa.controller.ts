import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { TipoPessoa } from "src/shared/pessoas.entity";
import { CreatePessoaDto } from "../dtos/create-pessoa.dto";
import { UpdatePessoaDto } from "../dtos/update-pessoa.dto";
import { PessoaService } from "../service/pessoa.service";

@Controller("pessoas")
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    try {
      return await this.pessoaService.create(createPessoaDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.pessoaService.findAll();
    } catch (error) {
      throw new NotFoundException("Nenhuma pessoa encontrada.");
    }
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const parsedId = +id; // Converte o ID para número
    if (isNaN(parsedId)) {
      throw new BadRequestException("ID inválido. O ID deve ser um número.");
    }
    try {
      return await this.pessoaService.findOne(parsedId);
    } catch (error) {
      throw new NotFoundException("Pessoa com ID ${parsedId} não encontrada.");
    }
  }

  @Get("tipo/:tipo")
  async findByTipo(@Param("tipo") tipo: TipoPessoa) {
    if (!tipo) {
      throw new BadRequestException("O parâmetro 'tipo' é obrigatório.");
    }
    try {
      return await this.pessoaService.findByTipo(tipo);
    } catch (error) {
      throw new NotFoundException("Nenhuma pessoa encontrada com o tipo ${tipo}.");
    }
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updatePessoaDto: UpdatePessoaDto,
  ) {
    const parsedId = +id; // Converte o ID para número
    if (isNaN(parsedId)) {
      throw new BadRequestException("ID inválido. O ID deve ser um número.");
    }
    try {
      return await this.pessoaService.update(parsedId, updatePessoaDto);
    } catch (error) {
      throw new NotFoundException("Pessoa com ID ${parsedId} não encontrada.");
    }
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    const parsedId = +id; // Converte o ID para número
    if (isNaN(parsedId)) {
      throw new BadRequestException("ID inválido. O ID deve ser um número.");
    }
    try {
      return await this.pessoaService.delete(parsedId);
    } catch (error) {
      throw new NotFoundException("Pessoa com ID ${parsedId} não encontrada.");
    }
  }
}