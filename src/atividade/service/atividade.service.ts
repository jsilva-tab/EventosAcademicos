import { Injectable, BadRequestException, Inject } from "@nestjs/common";
import { Atividade } from "src/shared/atividade.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AtividadeService {
  constructor(
    @InjectRepository(Atividade)
    private readonly atividadeRepository: Repository<Atividade>
  ) {}

  async create(createDto: Partial<Atividade>): Promise<Atividade> {
    const atividade = this.atividadeRepository.create(createDto);
    return await this.atividadeRepository.save(atividade);
  }

  async findAll(): Promise<Atividade[]> {
    return await this.atividadeRepository.find();
  }

  async findOne(id: number): Promise<Atividade> {
    const atividade = await this.atividadeRepository.findOne({ where: { id } });
    if (!atividade) {
      throw new BadRequestException("Atividade não encontrada");
    }
    return atividade;
  }

  async findByEvento(eventoId: number): Promise<Atividade[]> {
    return await this.atividadeRepository.find({
      where: { evento: { id: eventoId } },
    });
  }

  async update(id: number, updateDto: Partial<Atividade>): Promise<Atividade> {
    const atividade = await this.findOne(id);
    return await this.atividadeRepository.save(
      Object.assign(atividade, updateDto)
    );
  }

  async delete(id: number): Promise<void> {
    const atividade = await this.findOne(id);
    await this.atividadeRepository.remove(atividade);
  }

  async atualizarDataAtividade(id: number, novaData: Date): Promise<Atividade> {
    const atividade = await this.atividadeRepository.findOne({
      where: { id },
      relations: ["evento"],
    });

    if (!atividade) {
      throw new BadRequestException("Atividade não encontrada");
    }

    if (
      novaData < atividade.evento.data_inicio ||
      novaData > atividade.evento.data_fim
    ) {
      throw new BadRequestException("Nova data fora do intervalo do evento");
    }

    atividade.data_hora = novaData;
    return await this.atividadeRepository.save(atividade);
  }

  async verificarConflitos(atividadeId: number): Promise<boolean> {
    const atividade = await this.atividadeRepository.findOne({
      where: { id: atividadeId },
      relations: ["evento"],
    });

    if (!atividade) {
      throw new BadRequestException("Atividade não encontrada");
    }

    const conflitos = await this.atividadeRepository
      .createQueryBuilder("atividade")
      .where("atividade.eventoId = :eventoId", {
        eventoId: atividade.evento.id,
      })
      .andWhere("atividade.local = :local", { local: atividade.local })
      .andWhere("atividade.data_hora = :dataHora", {
        dataHora: atividade.data_hora,
      })
      .andWhere("atividade.id != :atividadeId", { atividadeId })
      .getCount();

    return conflitos > 0;
  }
}