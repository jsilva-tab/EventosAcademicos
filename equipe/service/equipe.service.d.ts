import { Equipe } from "src/shared/equipe.entity";
import { Repository } from "typeorm";
import { CreateEquipeDto } from "../dto/create-equipe.dto";
import { ModalidadeEsportivaService } from "src/atividade/service/modalidade-esportiva.service";
import { EquipePessoa } from "src/shared/equipePessoa.entity";
import { UpdateEquipeDto } from "../dto/update-equipe.dto";
import { Pessoa } from "src/shared/pessoas.entity";
export declare class EquipeService {
    private equipeRepository;
    private modalidadeService;
    private readonly equipePessoaRepository;
    private readonly pessoaRepository;
    constructor(equipeRepository: Repository<Equipe>, modalidadeService: ModalidadeEsportivaService, equipePessoaRepository: Repository<EquipePessoa>, pessoaRepository: Repository<Pessoa>);
    create(createEquipeDto: CreateEquipeDto): Promise<Equipe>;
    desativarEquipesVazias(): Promise<void>;
    findAll(): Promise<Equipe[]>;
    findOne(id: number): Promise<Equipe>;
    delete(id: number): Promise<void>;
    update(id: number, updateDto: UpdateEquipeDto): Promise<Equipe>;
    private atualizarMembros;
}
