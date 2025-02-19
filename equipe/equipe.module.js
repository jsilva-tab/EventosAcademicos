"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const equipe_entity_1 = require("../shared/equipe.entity");
const equipePessoa_entity_1 = require("../shared/equipePessoa.entity");
const pessoas_entity_1 = require("../shared/pessoas.entity");
const equipe_service_1 = require("./service/equipe.service");
const equipe_controller_1 = require("./controller/equipe.controller");
const modalidade_esportiva_module_1 = require("../atividade/modalidade-esportiva.module");
const atividadeEsportiva_entity_1 = require("../shared/atividadeEsportiva.entity");
let EquipeModule = class EquipeModule {
};
exports.EquipeModule = EquipeModule;
exports.EquipeModule = EquipeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                equipe_entity_1.Equipe,
                equipePessoa_entity_1.EquipePessoa,
                pessoas_entity_1.Pessoa,
                atividadeEsportiva_entity_1.ModalidadeEsportiva,
            ]),
            (0, common_1.forwardRef)(() => modalidade_esportiva_module_1.ModalidadeEsportivaModule),
        ],
        controllers: [equipe_controller_1.EquipeController],
        providers: [equipe_service_1.EquipeService],
        exports: [typeorm_1.TypeOrmModule],
    })
], EquipeModule);
//# sourceMappingURL=equipe.module.js.map