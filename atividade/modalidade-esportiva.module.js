"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadeEsportivaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const atividadeEsportiva_entity_1 = require("../shared/atividadeEsportiva.entity");
const equipe_module_1 = require("../equipe/equipe.module");
const modalidade_esportiva_service_1 = require("./service/modalidade-esportiva.service");
let ModalidadeEsportivaModule = class ModalidadeEsportivaModule {
};
exports.ModalidadeEsportivaModule = ModalidadeEsportivaModule;
exports.ModalidadeEsportivaModule = ModalidadeEsportivaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([atividadeEsportiva_entity_1.ModalidadeEsportiva]),
            (0, common_1.forwardRef)(() => equipe_module_1.EquipeModule),
        ],
        providers: [modalidade_esportiva_service_1.ModalidadeEsportivaService],
        exports: [modalidade_esportiva_service_1.ModalidadeEsportivaService],
    })
], ModalidadeEsportivaModule);
//# sourceMappingURL=modalidade-esportiva.module.js.map