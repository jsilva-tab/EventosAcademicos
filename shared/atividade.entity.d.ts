import { Evento } from "./evento.entity";
import { TipoAtividade } from "./tipoatividade";
export declare class Atividade {
    id: number;
    nome: string;
    descricao: string;
    data_hora: Date;
    local: string;
    evento: Evento;
    tipoAtividade: TipoAtividade;
}
