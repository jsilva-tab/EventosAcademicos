import { ModalidadeEsportiva } from "./atividadeEsportiva.entity";
import { EquipePessoa } from "./equipePessoa.entity";
export declare class Equipe {
    id: number;
    nome: string;
    modalidadeEsportiva: ModalidadeEsportiva;
    membros: EquipePessoa[];
    ativa: boolean;
}
