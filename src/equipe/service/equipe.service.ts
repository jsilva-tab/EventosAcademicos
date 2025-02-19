import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Equipe } from "src/shared/equipe.entity";
import { Repository } from "typeorm";
import { CreateEquipeDto } from "../dto/create-equipe.dto";
import { ModalidadeEsportivaService } from "src/atividade/service/modalidade-esportiva.service";
import { EquipePessoa } from "src/shared/equipePessoa.entity";
import { UpdateEquipeDto } from "../dto/update-equipe.dto";
import { Pessoa } from "src/shared/pessoas.entity";

@Injectable()
export class EquipeService {
  constructor(
    @InjectRepository(Equipe)
    private equipeRepository: Repository<Equipe>,
    private modalidadeService: ModalidadeEsportivaService,

    @InjectRepository(EquipePessoa)
    private readonly equipePessoaRepository: Repository<EquipePessoa>,

    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>
  ) {}

  async create(createEquipeDto: CreateEquipeDto): Promise<Equipe> {
    const modalidade = await this.modalidadeService.findOne(
      createEquipeDto.modalidade_esportiva_id
    );

    const equipe = this.equipeRepository.create({
      ...createEquipeDto,
      modalidadeEsportiva: modalidade,
      ativa: true,
    });

    return this.equipeRepository.save(equipe);
  }

  async desativarEquipesVazias(): Promise<void> {
    const periodoDesativacao = 30; // dias
    const dataLimite = new Date();
    dataLimite.setDate(dataLimite.getDate() - periodoDesativacao);

    const equipes = await this.equipeRepository
      .createQueryBuilder("equipe")
      .leftJoinAndSelect("equipe.membros", "membros")
      .where("equipe.ativa = true")
      .andWhere("equipe.dataCriacao < :dataLimite", { dataLimite })
      .getMany();

    for (const equipe of equipes) {
      if (equipe.membros.length === 0) {
        equipe.ativa = false;
        await this.equipeRepository.save(equipe);
      }
    }
  }
  async findAll(): Promise<Equipe[]> {
    return this.equipeRepository.find({
      relations: ["modalidadeEsportiva", "membros"],
    });
  }
  async findOne(id: number): Promise<Equipe> {
    return this.equipeRepository.findOne({
      where: { id },
      relations: ["modalidadeEsportiva", "membros"],
    });
  }
  async delete(id: number): Promise<void> {
    await this.equipeRepository.delete(id);
  }
  async update(id: number, updateDto: UpdateEquipeDto): Promise<Equipe> {
    const equipe = await this.equipeRepository.findOne({
      where: { id },
      relations: ["modalidadeEsportiva"],
    });

    if (!equipe) {
      throw new NotFoundException(`Equipe com ID ${id} não encontrada`);
    }

    // Atualiza campos básicos
    Object.assign(equipe, updateDto);

    // Atualiza membros se fornecido
    if (updateDto.membros_ids) {
      await this.atualizarMembros(equipe, updateDto.membros_ids);
    }

    return this.equipeRepository.save(equipe);
  }

  private async atualizarMembros(
    equipe: Equipe,
    novosMembrosIds: number[]
  ): Promise<void> {
    // Remove membros antigos que não estão na nova lista
    await this.equipePessoaRepository
      .createQueryBuilder()
      .delete()
      .where("equipe_id = :equipeId", { equipeId: equipe.id })
      .andWhere("pessoa_id NOT IN (:...ids)", { ids: novosMembrosIds })
      .execute();

    // Adiciona novos membros
    const membrosExistentes = await this.equipePessoaRepository.find({
      where: { equipe: { id: equipe.id } },
      select: ["pessoa"],
    });

    const idsExistentes = membrosExistentes.map((me) => me.pessoa.id);
    const novosIds = novosMembrosIds.filter(
      (id) => !idsExistentes.includes(id)
    );

    if (novosIds.length > 0) {
      // Validação de tipo de pessoa
      const pessoasInvalidas = await this.pessoaRepository
        .createQueryBuilder("pessoa")
        .where("pessoa.id IN (:...ids)", { ids: novosIds })
        .andWhere("pessoa.tipo != :tipo", { tipo: "membro_equipe" })
        .getCount();

      if (pessoasInvalidas > 0) {
        throw new ConflictException(
          "Algumas pessoas não são do tipo membro_equipe"
        );
      }

      // Insere novos membros
      const novosMembros = novosIds.map((pessoaId) => ({
        equipe: { id: equipe.id },
        pessoa: { id: pessoaId },
      }));

      await this.equipePessoaRepository
        .createQueryBuilder()
        .insert()
        .into(EquipePessoa)
        .values(novosMembros)
        .execute();
    }
  }
}
