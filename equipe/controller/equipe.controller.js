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
exports.EquipeController = void 0;
const common_1 = require("@nestjs/common");
const create_equipe_dto_1 = require("../dto/create-equipe.dto");
const equipe_service_1 = require("../service/equipe.service");
const update_equipe_dto_1 = require("../dto/update-equipe.dto");
let EquipeController = class EquipeController {
    constructor(equipeService) {
        this.equipeService = equipeService;
    }
    create(createDto) {
        return this.equipeService.create(createDto);
    }
    findAll() {
        return this.equipeService.findAll();
    }
    findOne(id) {
        const parsedId = +id;
        if (isNaN(parsedId)) {
            throw new Error("ID inválido. O ID deve ser um número.");
        }
        return this.equipeService.findOne(parsedId);
    }
    async update(id, updateDto) {
        const parsedId = +id;
        if (isNaN(parsedId)) {
            throw new Error("ID inválido. O ID deve ser um número.");
        }
        return this.equipeService.update(parsedId, updateDto);
    }
    remove(id) {
        const parsedId = +id;
        if (isNaN(parsedId)) {
            throw new Error("ID inválido. O ID deve ser um número.");
        }
        return this.equipeService.delete(parsedId);
    }
    desativarEquipesVazias() {
        return this.equipeService.desativarEquipesVazias();
    }
};
exports.EquipeController = EquipeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_equipe_dto_1.CreateEquipeDto]),
    __metadata("design:returntype", void 0)
], EquipeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EquipeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EquipeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_equipe_dto_1.UpdateEquipeDto]),
    __metadata("design:returntype", Promise)
], EquipeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EquipeController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)("desativar/vazias"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EquipeController.prototype, "desativarEquipesVazias", null);
exports.EquipeController = EquipeController = __decorate([
    (0, common_1.Controller)("equipes"),
    __metadata("design:paramtypes", [equipe_service_1.EquipeService])
], EquipeController);
//# sourceMappingURL=equipe.controller.js.map