"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const atividade_module_1 = require("./atividade/atividade.module");
const evento_module_1 = require("./evento/evento.module");
const equipe_module_1 = require("./equipe/equipe.module");
const inscricao_module_1 = require("./evento/inscricao.module");
const palestrante_module_1 = require("./palestrante/palestrante.module");
const atividade_entity_1 = require("./shared/atividade.entity");
const evento_entity_1 = require("./shared/evento.entity");
const tipoevento_entity_1 = require("./shared/tipoevento.entity");
const inscricao_entity_1 = require("./shared/inscricao.entity");
const palestrante_entity_1 = require("./shared/palestrante.entity");
const pessoas_entity_1 = require("./shared/pessoas.entity");
const equipe_entity_1 = require("./shared/equipe.entity");
const equipePessoa_entity_1 = require("./shared/equipePessoa.entity");
const tipoatividade_1 = require("./shared/tipoatividade");
const atividadeEsportiva_entity_1 = require("./shared/atividadeEsportiva.entity");
const pessoas_module_1 = require("./pessoas/pessoas.module");
const modalidade_esportiva_module_1 = require("./atividade/modalidade-esportiva.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: 'M!ch$#l,Sh##n<3',
                    database: 'eventos_academicos',
                    entities: [
                        atividade_entity_1.Atividade,
                        tipoatividade_1.TipoAtividade,
                        evento_entity_1.Evento,
                        tipoevento_entity_1.TipoEvento,
                        inscricao_entity_1.Inscricao,
                        palestrante_entity_1.Palestrante,
                        pessoas_entity_1.Pessoa,
                        equipe_entity_1.Equipe,
                        equipePessoa_entity_1.EquipePessoa,
                        atividadeEsportiva_entity_1.ModalidadeEsportiva,
                    ],
                    synchronize: false,
                }),
            }),
            atividade_module_1.AtividadeModule,
            evento_module_1.EventoModule,
            pessoas_module_1.PessoaModule,
            equipe_module_1.EquipeModule,
            inscricao_module_1.InscricaoModule,
            palestrante_module_1.PalestranteModule,
            modalidade_esportiva_module_1.ModalidadeEsportivaModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map