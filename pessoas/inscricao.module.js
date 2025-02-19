"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscricaoModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const inscricao_entity_1 = require("../shared/inscricao.entity");
const inscricao_controller_1 = require("../evento/controller/inscricao.controller");
const inscri_ao_service_1 = require("../evento/service/inscri\u00E7ao.service");
let InscricaoModule = class InscricaoModule {
};
exports.InscricaoModule = InscricaoModule;
exports.InscricaoModule = InscricaoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([inscricao_entity_1.Inscricao])],
        controllers: [inscricao_controller_1.InscricaoController],
        providers: [inscri_ao_service_1.InscricaoService],
        exports: [inscri_ao_service_1.InscricaoService],
    })
], InscricaoModule);
//# sourceMappingURL=inscricao.module.js.map