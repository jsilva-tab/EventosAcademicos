"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscricaoController = void 0;
const common_1 = require("@nestjs/common");
const create_inscri__o_dto_1 = require("../../pessoas/dtos/create-inscri\u00E7\u00E3o.dto");
const inscri_ao_service_1 = require("../service/inscri\u00E7ao.service");
let InscricaoController = class InscricaoController {
    constructor(inscricaoService) {
        this.inscricaoService = inscricaoService;
    }
    async create(createDto) {
        return this.inscricaoService.inscreverPessoa(createDto.evento_id, createDto.pessoa_id);
    }
    async findByPessoa(pessoaId) {
        return this.inscricaoService.findInscricoesPorPessoa(+pessoaId);
    }
    async findOne(id) {
        return this.inscricaoService.findOne(+id);
    }
    async cancelar(id) {
        return this.inscricaoService.cancelarInscricao(+id);
    }
};
exports.InscricaoController = InscricaoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inscri__o_dto_1.CreateInscricaoDto]),
    __metadata("design:returntype", Promise)
], InscricaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("pessoa/:pessoaId"),
    __param(0, (0, common_1.Param)("pessoaId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InscricaoController.prototype, "findByPessoa", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InscricaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InscricaoController.prototype, "cancelar", null);
exports.InscricaoController = InscricaoController = __decorate([
    (0, common_1.Controller)("inscricoes"),
    __metadata("design:paramtypes", [inscri_ao_service_1.InscricaoService])
], InscricaoController);
//# sourceMappingURL=inscricao.controller.js.map