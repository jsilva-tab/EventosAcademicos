"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const pessoas_entity_1 = require("../shared/pessoas.entity");
const pessoa_controller_1 = require("./controllers/pessoa.controller");
const pessoa_service_1 = require("./service/pessoa.service");
let PessoaModule = class PessoaModule {
};
exports.PessoaModule = PessoaModule;
exports.PessoaModule = PessoaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pessoas_entity_1.Pessoa])],
        controllers: [pessoa_controller_1.PessoaController],
        providers: [pessoa_service_1.PessoaService],
        exports: [pessoa_service_1.PessoaService, typeorm_1.TypeOrmModule],
    })
], PessoaModule);
//# sourceMappingURL=pessoas.module.js.map