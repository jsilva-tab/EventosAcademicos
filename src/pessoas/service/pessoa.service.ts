import {
  Injectable,
  ConflictException,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pessoa, TipoPessoa } from "src/shared/pessoas.entity";
import { Repository } from "typeorm";
import { CreatePessoaDto } from "../dtos/create-pessoa.dto";
import { UpdatePessoaDto } from "../dtos/update-pessoa.dto";

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>
  ) {}

  private validatePhone(phone: string): boolean {
    const regex = /^\+[1-9]\d{1,14}$/;
    return regex.test(phone);
  }

  async create(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    const existing = await this.pessoaRepository.findOne({
      where: { email: createPessoaDto.email },
    });
    if (existing) {
      throw new ConflictException("Email já cadastrado");
    }

    if (!this.validatePhone(createPessoaDto.telefone)) {
      throw new BadRequestException("Formato de telefone inválido");
    }

    if (!Object.values(TipoPessoa).includes(createPessoaDto.tipo)) {
      throw new BadRequestException("Tipo de pessoa inválido");
    }

    const pessoa = this.pessoaRepository.create(createPessoaDto);
    return this.pessoaRepository.save(pessoa);
  }

  async findAll(): Promise<Pessoa[]> {
    return this.pessoaRepository.find();
  }

  async findOne(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({ where: { id } });
    if (!pessoa) throw new NotFoundException("Pessoa não encontrada");
    return pessoa;
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa> {
    const pessoa = await this.findOne(id);

    if (updatePessoaDto.email && updatePessoaDto.email !== pessoa.email) {
      const existing = await this.pessoaRepository.findOne({
        where: { email: updatePessoaDto.email },
      });
      if (existing) throw new ConflictException("Email já cadastrado");
    }

    if (
      updatePessoaDto.telefone &&
      !this.validatePhone(updatePessoaDto.telefone)
    ) {
      throw new BadRequestException("Formato de telefone inválido");
    }

    return this.pessoaRepository.save({ ...pessoa, ...updatePessoaDto });
  }

  async delete(id: number): Promise<void> {
    const pessoa = await this.findOne(id);
    await this.pessoaRepository.remove(pessoa);
  }
  async findByTipo(tipo: TipoPessoa): Promise<Pessoa[]> {
    return this.pessoaRepository.find({ where: { tipo } });
  }
}
