import { IsDate, IsInt, IsNotEmpty, IsString, Min } from "class-validator";
import { Type } from "class-transformer";

export class CreateAtividadeDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  data_hora: Date;

  @IsString()
  @IsNotEmpty()
  local: string;

  @IsInt()
  @IsNotEmpty()
  evento_id: number;

  @IsInt()
  @IsNotEmpty()
  tipo_atividade_id: number;

  @Min(30)
  @IsInt()
  duracao_minutos: number;
}
