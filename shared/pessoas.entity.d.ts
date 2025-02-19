export declare enum TipoPessoa {
    ORGANIZADOR = "organizador",
    PARTICIPANTE = "participante",
    PALESTRANTE = "palestrante",
    MEMBRO_EQUIPE = "membro_equipe"
}
export declare class Pessoa {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    tipo: TipoPessoa;
}
