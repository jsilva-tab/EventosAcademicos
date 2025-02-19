import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PessoaModule } from "src/pessoas/pessoas.module";
import { Palestrante } from "src/shared/palestrante.entity";
import { PalestranteController } from "./controller/palestrante.controller";
import { PalestranteService } from "./service/palestrante.service";

@Module({
  imports: [TypeOrmModule.forFeature([Palestrante]), PessoaModule],
  controllers: [PalestranteController],
  providers: [PalestranteService],
})
export class PalestranteModule {}
