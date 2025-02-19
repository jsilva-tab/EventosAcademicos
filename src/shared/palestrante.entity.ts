import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Pessoa } from "./pessoas.entity";

@Entity()
export class Palestrante {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Pessoa)
  @JoinColumn({ name: "pessoa_id" })
  pessoa: Pessoa;

  @Column({ type: "text" })
  biografia: string;

  @Column({ length: 100 })
  instituicao: string;
}
