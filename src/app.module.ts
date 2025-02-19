import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AtividadeModule } from "./atividade/atividade.module";
import { EventoModule } from "./evento/evento.module";
import { EquipeModule } from "./equipe/equipe.module";
import { InscricaoModule } from "./evento/inscricao.module";
import { PalestranteModule } from "./palestrante/palestrante.module";

// Entidades
import { Atividade } from "./shared/atividade.entity";
import { Evento } from "./shared/evento.entity";
import { TipoEvento } from "./shared/tipoevento.entity";
import { Inscricao } from "./shared/inscricao.entity";
import { Palestrante } from "./shared/palestrante.entity";
import { Pessoa } from "./shared/pessoas.entity";
import { Equipe } from "./shared/equipe.entity";
import { EquipePessoa } from "./shared/equipePessoa.entity";
import { TipoAtividade } from "./shared/tipoatividade";
import { ModalidadeEsportiva } from "./shared/atividadeEsportiva.entity";
import { PessoaModule } from "./pessoas/pessoas.module";
import { ModalidadeEsportivaModule } from "./atividade/modalidade-esportiva.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'M!ch$#l,Sh##n<3',
      database: 'eventos_academicos',
      entities: [
        Atividade,
        TipoAtividade,
        Evento,
        TipoEvento,
        Inscricao,
        Palestrante,
        Pessoa,
        Equipe,
        EquipePessoa,
        ModalidadeEsportiva,
      ],
      synchronize: false,
     }),
    }),
    AtividadeModule,
    EventoModule,
    PessoaModule,
    EquipeModule,
    InscricaoModule,
    PalestranteModule,
    ModalidadeEsportivaModule,
  ],
})
export class AppModule {}
