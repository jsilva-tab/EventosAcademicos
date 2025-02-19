import { Atividade } from "./atividade.entity";
import { Evento } from "./evento.entity";
import { Pessoa } from "./pessoas.entity";
export declare class Inscricao {
    id: number;
    pessoa: Pessoa;
    evento: Evento;
    atividade: Atividade;
    data_inscricao: Date;
}
