import { IsString, IsNotEmpty } from "class-validator";

export class CreateModalidadeEsportivaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
