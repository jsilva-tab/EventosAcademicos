import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Atividade } from "../shared/atividade.entity";

import { AtividadeController } from "./controller/atividade.controller";
import { AtividadeService } from "./service/atividade.service";
import { TipoAtividade } from "src/shared/tipoatividade";

@Module({
  imports: [TypeOrmModule.forFeature([Atividade, TipoAtividade])],
  controllers: [AtividadeController],
  providers: [AtividadeService],
})
export class AtividadeModule {}
