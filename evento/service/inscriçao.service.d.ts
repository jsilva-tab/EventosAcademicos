import { Repository } from "typeorm";
import { Inscricao } from "src/shared/inscricao.entity";
export declare class InscricaoService {
    private inscricaoRepository;
    constructor(inscricaoRepository: Repository<Inscricao>);
    inscreverPessoa(eventoId: number, pessoaId: number): Promise<Inscricao>;
    cancelarInscricao(id: number): Promise<void>;
    findInscricoesPorPessoa(pessoaId: number): Promise<Inscricao[]>;
    findOne(id: number): Promise<Inscricao>;
}
