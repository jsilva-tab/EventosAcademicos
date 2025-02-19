import { IsDate, IsNotEmpty, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateEventoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  data_inicio: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  data_fim: Date;

  @IsString()
  @IsNotEmpty()
  local: string;

  @IsInt()
  @IsNotEmpty()
  organizador_id: number;

  @IsInt()
  @IsNotEmpty()
  tipo_evento_id: number;
}
