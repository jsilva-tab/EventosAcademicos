import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Inscricao } from "src/shared/inscricao.entity";
import { InscricaoController } from "src/evento/controller/inscricao.controller";
import { InscricaoService } from "src/evento/service/inscriçao.service";

@Module({
  imports: [TypeOrmModule.forFeature([Inscricao])],
  controllers: [InscricaoController],
  providers: [InscricaoService],
  exports: [InscricaoService],
})
export class InscricaoModule {}
