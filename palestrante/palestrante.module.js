"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalestranteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pessoas_module_1 = require("../pessoas/pessoas.module");
const palestrante_entity_1 = require("../shared/palestrante.entity");
const palestrante_controller_1 = require("./controller/palestrante.controller");
const palestrante_service_1 = require("./service/palestrante.service");
let PalestranteModule = class PalestranteModule {
};
exports.PalestranteModule = PalestranteModule;
exports.PalestranteModule = PalestranteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([palestrante_entity_1.Palestrante]), pessoas_module_1.PessoaModule],
        controllers: [palestrante_controller_1.PalestranteController],
        providers: [palestrante_service_1.PalestranteService],
    })
], PalestranteModule);
//# sourceMappingURL=palestrante.module.js.map