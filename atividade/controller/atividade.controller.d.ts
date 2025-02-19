import { CreateAtividadeDto } from "../dto/create-atividade.dto";
import { UpdateAtividadeDto } from "../dto/update-atividade.dto";
import { AtividadeService } from "../service/atividade.service";
export declare class AtividadeController {
    private readonly atividadeService;
    constructor(atividadeService: AtividadeService);
    create(createDto: CreateAtividadeDto): Promise<import("../../shared/atividade.entity").Atividade>;
    findAll(): Promise<import("../../shared/atividade.entity").Atividade[]>;
    findByEvento(eventoId: string): Promise<import("../../shared/atividade.entity").Atividade[]>;
    findOne(id: string): Promise<import("../../shared/atividade.entity").Atividade>;
    update(id: string, updateDto: UpdateAtividadeDto): Promise<import("../../shared/atividade.entity").Atividade>;
    remove(id: string): Promise<void>;
}
