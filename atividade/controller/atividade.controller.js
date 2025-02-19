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
exports.AtividadeController = void 0;
const common_1 = require("@nestjs/common");
const create_atividade_dto_1 = require("../dto/create-atividade.dto");
const update_atividade_dto_1 = require("../dto/update-atividade.dto");
const atividade_service_1 = require("../service/atividade.service");
let AtividadeController = class AtividadeController {
    constructor(atividadeService) {
        this.atividadeService = atividadeService;
    }
    async create(createDto) {
        return await this.atividadeService.create(createDto);
    }
    async findAll() {
        return await this.atividadeService.findAll();
    }
    async findByEvento(eventoId) {
        const parsedId = parseInt(eventoId, 10);
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException("ID de evento inválido. O ID deve ser um número.");
        }
        return await this.atividadeService.findByEvento(parsedId);
    }
    async findOne(id) {
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException("ID inválido. O ID deve ser um número.");
        }
        return await this.atividadeService.findOne(parsedId);
    }
    async update(id, updateDto) {
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException("ID inválido. O ID deve ser um número.");
        }
        return await this.atividadeService.update(parsedId, updateDto);
    }
    async remove(id) {
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException("ID inválido. O ID deve ser um número.");
        }
        return await this.atividadeService.delete(parsedId);
    }
};
exports.AtividadeController = AtividadeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_atividade_dto_1.CreateAtividadeDto]),
    __metadata("design:returntype", Promise)
], AtividadeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AtividadeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("evento/:eventoId"),
    __param(0, (0, common_1.Param)("eventoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AtividadeController.prototype, "findByEvento", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AtividadeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_atividade_dto_1.UpdateAtividadeDto]),
    __metadata("design:returntype", Promise)
], AtividadeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AtividadeController.prototype, "remove", null);
exports.AtividadeController = AtividadeController = __decorate([
    (0, common_1.Controller)('atividade'),
    __metadata("design:paramtypes", [atividade_service_1.AtividadeService])
], AtividadeController);
//# sourceMappingURL=atividade.controller.js.map