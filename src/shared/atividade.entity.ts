import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
  JoinColumn,
} from "typeorm";
import { Evento } from "./evento.entity";
import { TipoAtividade } from "./tipoatividade";

@Entity()
@Index(["evento", "local", "data_hora"], { unique: true })
export class Atividade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: "text" })
  descricao: string;

  @Column({ type: "datetime" })
  data_hora: Date;

  @Column({ length: 100 })
  local: string;

  @ManyToOne(() => Evento, (evento) => evento.atividades)
  @JoinColumn({ name: "evento_id" })
  evento: Evento;

  @ManyToOne(() => TipoAtividade)
  @JoinColumn({ name: "tipo_atividade_id" })
  tipoAtividade: TipoAtividade;
}
