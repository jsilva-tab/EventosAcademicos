import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Palestrante } from "src/shared/palestrante.entity";
import { Pessoa, TipoPessoa } from "src/shared/pessoas.entity";
import { Repository } from "typeorm";
import { CreatePalestranteDto } from "../dto/create-palestrante.dto";
import { UpdatePalestranteDto } from "../dto/update-palestrante.dto";

@Injectable()
export class PalestranteService {
  constructor(
    @InjectRepository(Palestrante)
    private readonly palestranteRepository: Repository<Palestrante>,

    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>
  ) {}

  async create(createDto: CreatePalestranteDto): Promise<Palestrante> {
    // Validação da pessoa vinculada
    const pessoa = await this.pessoaRepository.findOne({
      where: { id: createDto.pessoa_id },
    });

    if (!pessoa) {
      throw new NotFoundException("Pessoa não encontrada");
    }

    if (pessoa.tipo !== TipoPessoa.PALESTRANTE) {
      throw new BadRequestException("A pessoa deve ser do tipo palestrante");
    }

    // Validação da instituição
    if (!createDto.instituicao) {
      throw new BadRequestException("Instituição é obrigatória");
    }

    // Verifica se já existe registro para essa pessoa
    const existing = await this.palestranteRepository.findOne({
      where: { pessoa: { id: createDto.pessoa_id } },
    });

    if (existing) {
      throw new ConflictException(
        "Esta pessoa já está cadastrada como palestrante"
      );
    }

    const novoPalestrante = this.palestranteRepository.create({
      ...createDto,
      pessoa,
    });

    return this.palestranteRepository.save(novoPalestrante);
  }

  async findAll(): Promise<Palestrante[]> {
    return this.palestranteRepository.find({ relations: ["pessoa"] });
  }

  async findOne(id: number): Promise<Palestrante> {
    const palestrante = await this.palestranteRepository.findOne({
      where: { id },
      relations: ["pessoa"],
    });

    if (!palestrante) {
      throw new NotFoundException(`Palestrante com ID ${id} não encontrado`);
    }

    return palestrante;
  }

  async update(
    id: number,
    updateDto: UpdatePalestranteDto
  ): Promise<Palestrante> {
    const palestrante = await this.findOne(id);

    // Validação da pessoa se for atualizada
    if (updateDto.pessoa_id && updateDto.pessoa_id !== palestrante.pessoa.id) {
      const novaPessoa = await this.pessoaRepository.findOne({
        where: { id: updateDto.pessoa_id },
      });

      if (!novaPessoa) {
        throw new NotFoundException("Nova pessoa não encontrada");
      }

      if (novaPessoa.tipo !== TipoPessoa.PALESTRANTE) {
        throw new BadRequestException(
          "A nova pessoa deve ser do tipo palestrante"
        );
      }

      palestrante.pessoa = novaPessoa;
    }

    // Validação da instituição
    if (updateDto.instituicao) {
      palestrante.instituicao = updateDto.instituicao;
    }

    // Validação da biografia
    if (updateDto.biografia) {
      if (updateDto.biografia.length > 2000) {
        throw new BadRequestException(
          "Biografia deve ter no máximo 2000 caracteres"
        );
      }
      palestrante.biografia = updateDto.biografia;
    }

    return this.palestranteRepository.save(palestrante);
  }

  async delete(id: number): Promise<void> {
    const palestrante = await this.findOne(id);
    await this.palestranteRepository.remove(palestrante);
  }

  async findByInstituicao(instituicao: string): Promise<Palestrante[]> {
    return this.palestranteRepository
      .createQueryBuilder("palestrante")
      .where("LOWER(palestrante.instituicao) LIKE LOWER(:instituicao)", {
        instituicao: `%${instituicao}%`,
      })
      .getMany();
  }
}
