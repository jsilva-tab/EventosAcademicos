import { Atividade } from "src/shared/atividade.entity";
import { Repository } from "typeorm";
export declare class AtividadeService {
    private readonly atividadeRepository;
    constructor(atividadeRepository: Repository<Atividade>);
    create(createDto: Partial<Atividade>): Promise<Atividade>;
    findAll(): Promise<Atividade[]>;
    findOne(id: number): Promise<Atividade>;
    findByEvento(eventoId: number): Promise<Atividade[]>;
    update(id: number, updateDto: Partial<Atividade>): Promise<Atividade>;
    delete(id: number): Promise<void>;
    atualizarDataAtividade(id: number, novaData: Date): Promise<Atividade>;
    verificarConflitos(atividadeId: number): Promise<boolean>;
}
