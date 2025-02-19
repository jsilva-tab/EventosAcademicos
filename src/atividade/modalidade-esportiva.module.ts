import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ModalidadeEsportiva } from "src/shared/atividadeEsportiva.entity";
import { EquipeModule } from "src/equipe/equipe.module";
import { ModalidadeEsportivaService } from "./service/modalidade-esportiva.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([ModalidadeEsportiva]),
    forwardRef(() => EquipeModule),
  ],
  providers: [ModalidadeEsportivaService],
  exports: [ModalidadeEsportivaService],
})
export class ModalidadeEsportivaModule {}
