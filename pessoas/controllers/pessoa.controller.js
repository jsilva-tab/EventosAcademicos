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
exports.PessoaController = void 0;
const common_1 = require("@nestjs/common");
const pessoas_entity_1 = require("../../shared/pessoas.entity");
const create_pessoa_dto_1 = require("../dtos/create-pessoa.dto");
const update_pessoa_dto_1 = require("../dtos/update-pessoa.dto");
const pessoa_service_1 = require("../service/pessoa.service");
let PessoaController = class PessoaController {
    constructor(pessoaService) {
        this.pessoaService = pessoaService;
    }
    async create(createPessoaDto) {
        try {
            return await this.pessoaService.create(createPessoaDto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findAll() {
        try {
            return await this.pessoaService.findAll();
        }
        catch (error) {
            throw new common_1.NotFoundException("Nenhuma pessoa encontrada.");
        }
    }
    async findOne(id) {
        const parsedId = +id;
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException("ID inválido. O ID deve ser um número.");
        }
        try {
            return await this.pessoaService.findOne(parsedId);
        }
        catch (error) {
            throw new common_1.NotFoundException("Pessoa com ID ${parsedId} não encontrada.");
        }
    }
    async findByTipo(tipo) {
        if (!tipo) {
            throw new common_1.BadRequestException("O parâmetro 'tipo' é obrigatório.");
        }
        try {
            return await this.pessoaService.findByTipo(tipo);
        }
        catch (error) {
            throw new common_1.NotFoundException("Nenhuma pessoa encontrada com o tipo ${tipo}.");
        }
    }
    async update(id, updatePessoaDto) {
        const parsedId = +id;
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException("ID inválido. O ID deve ser um número.");
        }
        try {
            return await this.pessoaService.update(parsedId, updatePessoaDto);
        }
        catch (error) {
            throw new common_1.NotFoundException("Pessoa com ID ${parsedId} não encontrada.");
        }
    }
    async remove(id) {
        const parsedId = +id;
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException("ID inválido. O ID deve ser um número.");
        }
        try {
            return await this.pessoaService.delete(parsedId);
        }
        catch (error) {
            throw new common_1.NotFoundException("Pessoa com ID ${parsedId} não encontrada.");
        }
    }
};
exports.PessoaController = PessoaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pessoa_dto_1.CreatePessoaDto]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("tipo/:tipo"),
    __param(0, (0, common_1.Param)("tipo")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "findByTipo", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pessoa_dto_1.UpdatePessoaDto]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "remove", null);
exports.PessoaController = PessoaController = __decorate([
    (0, common_1.Controller)("pessoas"),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService])
], PessoaController);
//# sourceMappingURL=pessoa.controller.js.map