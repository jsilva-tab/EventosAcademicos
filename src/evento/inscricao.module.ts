import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventoModule } from "../evento/evento.module";
import { AtividadeModule } from "../atividade/atividade.module";
import { PessoaModule } from "src/pessoas/pessoas.module";
import { Inscricao } from "src/shared/inscricao.entity";
import { InscricaoController } from "./controller/inscricao.controller";
import { InscricaoService } from "./service/inscriçao.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Inscricao]),
    PessoaModule,
    EventoModule,
    AtividadeModule,
  ],
  controllers: [InscricaoController],
  providers: [InscricaoService],
})
export class InscricaoModule {}
