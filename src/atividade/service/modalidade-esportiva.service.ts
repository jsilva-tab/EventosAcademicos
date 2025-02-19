import {
  Injectable,
  ConflictException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Equipe } from "src/shared/equipe.entity";
import { ModalidadeEsportiva } from "src/shared/atividadeEsportiva.entity";
import { CreateModalidadeEsportivaDto } from "../dto/create-modalidade-esportiva.dto";
import { UpdateModalidadeEsportivaDto } from "../dto/update-modalidade-esportiva.dto";

@Injectable()
export class ModalidadeEsportivaService {
  constructor(
    @InjectRepository(ModalidadeEsportiva)
    private readonly modalidadeRepository: Repository<ModalidadeEsportiva>,

    @InjectRepository(Equipe)
    private readonly equipeRepository: Repository<Equipe>
  ) {}

  async create(
    createDto: CreateModalidadeEsportivaDto
  ): Promise<ModalidadeEsportiva> {
    // Verifica se o nome já existe
    const existing = await this.modalidadeRepository.findOne({
      where: { nome: createDto.nome },
    });

    if (existing) {
      throw new ConflictException(
        "Já existe uma modalidade esportiva com este nome"
      );
    }

    const novaModalidade = this.modalidadeRepository.create(createDto);
    return this.modalidadeRepository.save(novaModalidade);
  }

  async findAll(): Promise<ModalidadeEsportiva[]> {
    return this.modalidadeRepository.find();
  }

  async findOne(id: number): Promise<ModalidadeEsportiva> {
    const modalidade = await this.modalidadeRepository.findOne({
      where: { id },
    });

    if (!modalidade) {
      throw new NotFoundException(
        `Modalidade esportiva com ID ${id} não encontrada`
      );
    }

    return modalidade;
  }

  async update(
    id: number,
    updateDto: UpdateModalidadeEsportivaDto
  ): Promise<ModalidadeEsportiva> {
    const modalidade = await this.findOne(id);

    // Verifica se o novo nome já existe em outro registro
    if (updateDto.nome && updateDto.nome !== modalidade.nome) {
      const existing = await this.modalidadeRepository.findOne({
        where: { nome: updateDto.nome },
      });

      if (existing) {
        throw new ConflictException(
          "Já existe uma modalidade esportiva com este nome"
        );
      }
    }

    Object.assign(modalidade, updateDto);
    return this.modalidadeRepository.save(modalidade);
  }

  async delete(id: number): Promise<void> {
    const modalidade = await this.findOne(id);

    // Verifica se há equipes vinculadas
    const equipesCount = await this.equipeRepository
      .createQueryBuilder("equipe")
      .where("equipe.modalidade_esportiva_id = :id", { id })
      .getCount();

    if (equipesCount > 0) {
      throw new ConflictException(
        "Não é possível excluir modalidade com equipes vinculadas"
      );
    }

    await this.modalidadeRepository.delete(id);
  }

  async findByName(nome: string): Promise<ModalidadeEsportiva> {
    return this.modalidadeRepository.findOne({
      where: { nome },
    });
  }
}
