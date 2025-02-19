import {
  IsEnum,
  IsEmail,
  Matches,
  IsString,
  IsNotEmpty,
} from "class-validator";
import { TipoPessoa } from "src/shared/pessoas.entity";

export class CreatePessoaDto {
  @IsString()
  @IsNotEmpty({ message: "O nome é obrigatório." })
  nome: string;

  @IsEmail({}, { message: "E-mail inválido." })
  @IsNotEmpty({ message: "O e-mail é obrigatório." })
  email: string;

  @IsString()
  
  telefone: string;

  @IsEnum(TipoPessoa, { message: "Tipo de pessoa inválido." })
  @IsNotEmpty({ message: "O tipo de pessoa é obrigatório." })
  tipo: TipoPessoa;
}
