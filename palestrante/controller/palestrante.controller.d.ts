import { CreatePalestranteDto } from "../dto/create-palestrante.dto";
import { UpdatePalestranteDto } from "../dto/update-palestrante.dto";
import { PalestranteService } from "../service/palestrante.service";
export declare class PalestranteController {
    private readonly palestranteService;
    constructor(palestranteService: PalestranteService);
    create(createDto: CreatePalestranteDto): Promise<import("../../shared/palestrante.entity").Palestrante>;
    findAll(): Promise<import("../../shared/palestrante.entity").Palestrante[]>;
    findByInstituicao(instituicao: string): Promise<import("../../shared/palestrante.entity").Palestrante[]>;
    findOne(id: string): Promise<import("../../shared/palestrante.entity").Palestrante>;
    update(id: string, updateDto: UpdatePalestranteDto): Promise<import("../../shared/palestrante.entity").Palestrante>;
    remove(id: string): Promise<void>;
}
