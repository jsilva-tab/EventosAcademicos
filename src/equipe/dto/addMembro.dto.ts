import { IsInt, IsNotEmpty } from "class-validator";

export class AddMembroDto {
  @IsInt()
  @IsNotEmpty()
  equipe_id: number;

  @IsInt()
  @IsNotEmpty()
  pessoa_id: number;
}
