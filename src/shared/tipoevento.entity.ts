import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TipoEvento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  nome: string;
}
