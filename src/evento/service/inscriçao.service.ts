import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Inscricao } from "src/shared/inscricao.entity";  // Supondo que a entidade Inscricao esteja aqui

@Injectable()
export class InscricaoService {
  constructor(
    @InjectRepository(Inscricao)  // Injetando o repositório de Inscricao
    private inscricaoRepository: Repository<Inscricao>
  ) {}

  // Método para inscrever uma pessoa em um evento
  async inscreverPessoa(
    eventoId: number,
    pessoaId: number
  ): Promise<Inscricao> {
    const inscricao = this.inscricaoRepository.create({
      evento: { id: eventoId },
      pessoa: { id: pessoaId },
    });

    return this.inscricaoRepository.save(inscricao);
  }

  // Método para cancelar inscrição
  async cancelarInscricao(id: number): Promise<void> {
    const inscricao = await this.inscricaoRepository.findOne({
      where: { id },
      relations: ["evento"], // Relacionando o evento para verificar a data de início
    });

    // Se a inscrição não for encontrada, lançar erro
    if (!inscricao) {
      throw new NotFoundException("Inscrição com id ${id} não encontrada");
    }

    // Verificando se o evento já iniciou
    if (inscricao.evento.data_inicio < new Date()) {
      throw new BadRequestException(
        "Não é possível cancelar inscrição após o início do evento"
      );
    }

    // Deletando a inscrição
    await this.inscricaoRepository.delete(id);
  }

  // Método para listar todas as inscrições de uma pessoa
  async findInscricoesPorPessoa(pessoaId: number): Promise<Inscricao[]> {
    return this.inscricaoRepository.find({
      where: { pessoa: { id: pessoaId } },
      relations: ["evento", "atividade"],  // Relacionando evento e atividade
    });
  }

  // Método para buscar uma inscrição específica pelo id
  async findOne(id: number): Promise<Inscricao> {
    const inscricao = await this.inscricaoRepository.findOne({
      where: { id },
      relations: ["evento", "pessoa"],  // Relacionando evento e pessoa
    });

    if (!inscricao) {
      throw new NotFoundException("Inscrição com id ${id} não encontrada");
    }

    return inscricao;
  }
}