import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Pessoa } from "src/shared/pessoas.entity";
import { PessoaController } from "./controllers/pessoa.controller";
import { PessoaService } from "./service/pessoa.service";

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoaController],
  providers: [PessoaService],
  exports: [PessoaService, TypeOrmModule],
})
export class PessoaModule {}
