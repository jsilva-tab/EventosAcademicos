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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePessoaDto = void 0;
const class_validator_1 = require("class-validator");
const pessoas_entity_1 = require("../../shared/pessoas.entity");
class CreatePessoaDto {
}
exports.CreatePessoaDto = CreatePessoaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "O nome é obrigatório." }),
    __metadata("design:type", String)
], CreatePessoaDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "E-mail inválido." }),
    (0, class_validator_1.IsNotEmpty)({ message: "O e-mail é obrigatório." }),
    __metadata("design:type", String)
], CreatePessoaDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePessoaDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(pessoas_entity_1.TipoPessoa, { message: "Tipo de pessoa inválido." }),
    (0, class_validator_1.IsNotEmpty)({ message: "O tipo de pessoa é obrigatório." }),
    __metadata("design:type", String)
], CreatePessoaDto.prototype, "tipo", void 0);
//# sourceMappingURL=create-pessoa.dto.js.map