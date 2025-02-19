import { PartialType } from "@nestjs/mapped-types";
import { CreateModalidadeEsportivaDto } from "./create-modalidade-esportiva.dto";

export class UpdateModalidadeEsportivaDto extends PartialType(
  CreateModalidadeEsportivaDto
) {}
