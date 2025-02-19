import { Repository } from "typeorm";
import { Equipe } from "src/shared/equipe.entity";
import { ModalidadeEsportiva } from "src/shared/atividadeEsportiva.entity";
import { CreateModalidadeEsportivaDto } from "../dto/create-modalidade-esportiva.dto";
import { UpdateModalidadeEsportivaDto } from "../dto/update-modalidade-esportiva.dto";
export declare class ModalidadeEsportivaService {
    private readonly modalidadeRepository;
    private readonly equipeRepository;
    constructor(modalidadeRepository: Repository<ModalidadeEsportiva>, equipeRepository: Repository<Equipe>);
    create(createDto: CreateModalidadeEsportivaDto): Promise<ModalidadeEsportiva>;
    findAll(): Promise<ModalidadeEsportiva[]>;
    findOne(id: number): Promise<ModalidadeEsportiva>;
    update(id: number, updateDto: UpdateModalidadeEsportivaDto): Promise<ModalidadeEsportiva>;
    delete(id: number): Promise<void>;
    findByName(nome: string): Promise<ModalidadeEsportiva>;
}
