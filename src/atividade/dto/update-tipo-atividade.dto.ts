import { PartialType } from "@nestjs/mapped-types";
import { CreateTipoAtividadeDto } from "./create-tipo-atividade.dto";

export class UpdateTipoAtividadeDto extends PartialType(
  CreateTipoAtividadeDto
) {}
