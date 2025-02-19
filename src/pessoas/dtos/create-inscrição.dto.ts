import { IsDate, IsInt, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class CreateInscricaoDto {
  @IsInt()
  @IsNotEmpty()
  pessoa_id: number;

  @IsInt()
  @IsNotEmpty()
  evento_id: number;

  @IsInt()
  @IsNotEmpty()
  atividade_id: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  data_inscricao: Date;
}
