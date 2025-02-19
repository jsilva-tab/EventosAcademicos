import { Palestrante } from "src/shared/palestrante.entity";
import { Pessoa } from "src/shared/pessoas.entity";
import { Repository } from "typeorm";
import { CreatePalestranteDto } from "../dto/create-palestrante.dto";
import { UpdatePalestranteDto } from "../dto/update-palestrante.dto";
export declare class PalestranteService {
    private readonly palestranteRepository;
    private readonly pessoaRepository;
    constructor(palestranteRepository: Repository<Palestrante>, pessoaRepository: Repository<Pessoa>);
    create(createDto: CreatePalestranteDto): Promise<Palestrante>;
    findAll(): Promise<Palestrante[]>;
    findOne(id: number): Promise<Palestrante>;
    update(id: number, updateDto: UpdatePalestranteDto): Promise<Palestrante>;
    delete(id: number): Promise<void>;
    findByInstituicao(instituicao: string): Promise<Palestrante[]>;
}
