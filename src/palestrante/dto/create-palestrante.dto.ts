import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePalestranteDto {
  @IsInt()
  @IsNotEmpty()
  pessoa_id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  biografia: string;

  @IsString()
  @IsNotEmpty()
  instituicao: string;
}
