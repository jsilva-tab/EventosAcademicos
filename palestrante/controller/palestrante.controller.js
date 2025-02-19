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
exports.PalestranteController = void 0;
const common_1 = require("@nestjs/common");
const create_palestrante_dto_1 = require("../dto/create-palestrante.dto");
const update_palestrante_dto_1 = require("../dto/update-palestrante.dto");
const palestrante_service_1 = require("../service/palestrante.service");
let PalestranteController = class PalestranteController {
    constructor(palestranteService) {
        this.palestranteService = palestranteService;
    }
    create(createDto) {
        return this.palestranteService.create(createDto);
    }
    findAll() {
        return this.palestranteService.findAll();
    }
    findByInstituicao(instituicao) {
        return this.palestranteService.findByInstituicao(instituicao);
    }
    findOne(id) {
        return this.palestranteService.findOne(+id);
    }
    update(id, updateDto) {
        return this.palestranteService.update(+id, updateDto);
    }
    remove(id) {
        return this.palestranteService.delete(+id);
    }
};
exports.PalestranteController = PalestranteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_palestrante_dto_1.CreatePalestranteDto]),
    __metadata("design:returntype", void 0)
], PalestranteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PalestranteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("buscar"),
    __param(0, (0, common_1.Query)("instituicao")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PalestranteController.prototype, "findByInstituicao", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PalestranteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_palestrante_dto_1.UpdatePalestranteDto]),
    __metadata("design:returntype", void 0)
], PalestranteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PalestranteController.prototype, "remove", null);
exports.PalestranteController = PalestranteController = __decorate([
    (0, common_1.Controller)("palestrantes"),
    __metadata("design:paramtypes", [palestrante_service_1.PalestranteService])
], PalestranteController);
//# sourceMappingURL=palestrante.controller.js.map