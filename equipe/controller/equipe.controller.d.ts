import { CreateEquipeDto } from "../dto/create-equipe.dto";
import { EquipeService } from "../service/equipe.service";
import { UpdateEquipeDto } from "../dto/update-equipe.dto";
export declare class EquipeController {
    private readonly equipeService;
    constructor(equipeService: EquipeService);
    create(createDto: CreateEquipeDto): Promise<import("../../shared/equipe.entity").Equipe>;
    findAll(): Promise<import("../../shared/equipe.entity").Equipe[]>;
    findOne(id: string): Promise<import("../../shared/equipe.entity").Equipe>;
    update(id: string, updateDto: UpdateEquipeDto): Promise<import("../../shared/equipe.entity").Equipe>;
    remove(id: string): Promise<void>;
    desativarEquipesVazias(): Promise<void>;
}
