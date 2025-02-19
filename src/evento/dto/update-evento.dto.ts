import { PartialType } from "@nestjs/mapped-types";
import { CreateEventoDto } from "./create-evento.dto";
import { IsOptional, IsInt } from "class-validator";

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
  @IsOptional()
  @IsInt()
  tipo_evento_id?: number;
}
