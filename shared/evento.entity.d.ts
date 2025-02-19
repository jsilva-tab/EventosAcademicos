import { Atividade } from "./atividade.entity";
import { Pessoa } from "./pessoas.entity";
import { TipoEvento } from "./tipoevento.entity";
export declare class Evento {
    id: number;
    nome: string;
    descricao: string;
    data_inicio: Date;
    data_fim: Date;
    local: string;
    organizador: Pessoa;
    tipoEvento: TipoEvento;
    tipoEventoId?: number;
    atividades: Atividade[];
    status: string;
}
