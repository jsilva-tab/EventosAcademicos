import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToOne,
} from "typeorm";
import { Palestrante } from "./palestrante.entity";

export enum TipoPessoa {
  ORGANIZADOR = "organizador",
  PARTICIPANTE = "participante",
  PALESTRANTE = "palestrante",
  MEMBRO_EQUIPE = "membro_equipe",
}

@Entity("pessoas")
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100, unique: true })
  @Index()
  email: string;

  @Column({ length: 20 })
  telefone: string;

  @Column({
    type: "enum",
    enum: TipoPessoa,
    default: TipoPessoa.PARTICIPANTE,
  })
  tipo: TipoPessoa;
}
