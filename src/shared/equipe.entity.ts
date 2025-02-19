import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { ModalidadeEsportiva } from "./atividadeEsportiva.entity";
import { EquipePessoa } from "./equipePessoa.entity";

@Entity()
export class Equipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @ManyToOne(() => ModalidadeEsportiva)
  @JoinColumn({ name: "modalidade_esportiva_id" })
  modalidadeEsportiva: ModalidadeEsportiva;

  @OneToMany(() => EquipePessoa, (equipePessoa) => equipePessoa.equipe)
  membros: EquipePessoa[];

  @Column()
  ativa: boolean;
}
