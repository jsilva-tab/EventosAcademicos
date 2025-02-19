import { CreateInscricaoDto } from "src/pessoas/dtos/create-inscrição.dto";
import { InscricaoService } from "../service/inscriçao.service";
export declare class InscricaoController {
    private readonly inscricaoService;
    constructor(inscricaoService: InscricaoService);
    create(createDto: CreateInscricaoDto): Promise<import("../../shared/inscricao.entity").Inscricao>;
    findByPessoa(pessoaId: string): Promise<import("../../shared/inscricao.entity").Inscricao[]>;
    findOne(id: string): Promise<import("../../shared/inscricao.entity").Inscricao>;
    cancelar(id: string): Promise<void>;
}
