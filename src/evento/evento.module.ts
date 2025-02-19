import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Evento } from "src/shared/evento.entity";
import { EventoController } from "./controller/evento.controller";
import { EventoService } from "./service/evento.service";
import { TipoEvento } from "src/shared/tipoevento.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Evento, TipoEvento])],
  controllers: [EventoController],
  providers: [EventoService],
})
export class EventoModule {}
