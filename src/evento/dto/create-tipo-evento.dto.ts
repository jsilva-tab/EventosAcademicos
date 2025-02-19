import { IsString, IsNotEmpty } from "class-validator";

export class CreateTipoEventoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
