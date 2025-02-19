import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TipoAtividade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  nome: string;
}
