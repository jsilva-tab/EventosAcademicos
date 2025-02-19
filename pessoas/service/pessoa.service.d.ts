import { Pessoa, TipoPessoa } from "src/shared/pessoas.entity";
import { Repository } from "typeorm";
import { CreatePessoaDto } from "../dtos/create-pessoa.dto";
import { UpdatePessoaDto } from "../dtos/update-pessoa.dto";
export declare class PessoaService {
    private pessoaRepository;
    constructor(pessoaRepository: Repository<Pessoa>);
    private validatePhone;
    create(createPessoaDto: CreatePessoaDto): Promise<Pessoa>;
    findAll(): Promise<Pessoa[]>;
    findOne(id: number): Promise<Pessoa>;
    update(id: number, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa>;
    delete(id: number): Promise<void>;
    findByTipo(tipo: TipoPessoa): Promise<Pessoa[]>;
}
