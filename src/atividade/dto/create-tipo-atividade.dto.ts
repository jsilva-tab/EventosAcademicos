import { IsString, IsNotEmpty } from "class-validator";

export class CreateTipoAtividadeDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
