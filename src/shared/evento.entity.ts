import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Atividade } from "./atividade.entity";
import { Pessoa } from "./pessoas.entity";
import { TipoEvento } from "./tipoevento.entity";

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: "text" })
  descricao: string;

  @Column({ type: "datetime" })
  data_inicio: Date;

  @Column({ type: "datetime" })
  data_fim: Date;

  @Column({ length: 100 })
  local: string;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: "organizador_id" })
  organizador: Pessoa;

  @ManyToOne(() => TipoEvento, { eager: true }) // Carregamento eager para simplificar
  @JoinColumn({ name: "tipo_evento_id" })
  tipoEvento: TipoEvento;

  // Garantir que a coluna do ID exista se necessário para queries
  @Column({ name: "tipo_evento_id", nullable: true })
  tipoEventoId?: number;

  @OneToMany(() => Atividade, (atividade) => atividade.evento)
  atividades: Atividade[];
  status: string;
}
