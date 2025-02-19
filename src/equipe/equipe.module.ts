import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Equipe } from "../shared/equipe.entity";
import { EquipePessoa } from "../shared/equipePessoa.entity";
import { Pessoa } from "../shared/pessoas.entity";
import { EquipeService } from "./service/equipe.service";
import { EquipeController } from "./controller/equipe.controller";
import { ModalidadeEsportivaModule } from "src/atividade/modalidade-esportiva.module";
import { ModalidadeEsportiva } from "src/shared/atividadeEsportiva.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Equipe,
      EquipePessoa,
      Pessoa,
      ModalidadeEsportiva,
    ]),
    forwardRef(() => ModalidadeEsportivaModule),
  ],
  controllers: [EquipeController],
  providers: [EquipeService],
  exports: [TypeOrmModule],
})
export class EquipeModule {}
