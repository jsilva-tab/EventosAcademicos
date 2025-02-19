"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscricaoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const evento_module_1 = require("../evento/evento.module");
const atividade_module_1 = require("../atividade/atividade.module");
const pessoas_module_1 = require("../pessoas/pessoas.module");
const inscricao_entity_1 = require("../shared/inscricao.entity");
const inscricao_controller_1 = require("./controller/inscricao.controller");
const inscri_ao_service_1 = require("./service/inscri\u00E7ao.service");
let InscricaoModule = class InscricaoModule {
};
exports.InscricaoModule = InscricaoModule;
exports.InscricaoModule = InscricaoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([inscricao_entity_1.Inscricao]),
            pessoas_module_1.PessoaModule,
            evento_module_1.EventoModule,
            atividade_module_1.AtividadeModule,
        ],
        controllers: [inscricao_controller_1.InscricaoController],
        providers: [inscri_ao_service_1.InscricaoService],
    })
], InscricaoModule);
//# sourceMappingURL=inscricao.module.js.map