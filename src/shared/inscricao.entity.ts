import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
  JoinColumn,
} from "typeorm";
import { Atividade } from "./atividade.entity";
import { Evento } from "./evento.entity";
import { Pessoa } from "./pessoas.entity";

@Entity()
@Index(["pessoa", "atividade"], { unique: true })
export class Inscricao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: "pessoa_id" })
  pessoa: Pessoa;

  @ManyToOne(() => Evento)
  @JoinColumn({ name: "evento_id" })
  evento: Evento;

  @ManyToOne(() => Atividade)
  @JoinColumn({ name: "atividade_id" })
  atividade: Atividade;

  @Column({ type: "datetime" })
  data_inscricao: Date;
}
