import { TipoPessoa } from "src/shared/pessoas.entity";
import { CreatePessoaDto } from "../dtos/create-pessoa.dto";
import { UpdatePessoaDto } from "../dtos/update-pessoa.dto";
import { PessoaService } from "../service/pessoa.service";
export declare class PessoaController {
    private readonly pessoaService;
    constructor(pessoaService: PessoaService);
    create(createPessoaDto: CreatePessoaDto): Promise<import("src/shared/pessoas.entity").Pessoa>;
    findAll(): Promise<import("src/shared/pessoas.entity").Pessoa[]>;
    findOne(id: string): Promise<import("src/shared/pessoas.entity").Pessoa>;
    findByTipo(tipo: TipoPessoa): Promise<import("src/shared/pessoas.entity").Pessoa[]>;
    update(id: string, updatePessoaDto: UpdatePessoaDto): Promise<import("src/shared/pessoas.entity").Pessoa>;
    remove(id: string): Promise<void>;
}
