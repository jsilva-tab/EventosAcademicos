import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  JoinColumn,
} from "typeorm";
import { Equipe } from "./equipe.entity";
import { Pessoa } from "./pessoas.entity";

@Entity()
@Index(["pessoa", "equipe"], { unique: true })
export class EquipePessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Equipe)
  @JoinColumn({ name: "equipe_id" })
  equipe: Equipe;

  @ManyToOne(() => Pessoa)
  @JoinColumn({ name: "pessoa_id" })
  pessoa: Pessoa;
}
