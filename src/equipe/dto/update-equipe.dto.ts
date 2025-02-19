import { PartialType } from "@nestjs/mapped-types";
import { CreateEquipeDto } from "./create-equipe.dto";
import { IsArray, IsOptional, IsInt } from "class-validator";

export class UpdateEquipeDto extends PartialType(CreateEquipeDto) {
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  membros_ids?: number[];
}
