import { IsInt, IsString, IsNotEmpty } from "class-validator";

export class CreateEquipeDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsInt()
  @IsNotEmpty()
  modalidade_esportiva_id: number;
}
