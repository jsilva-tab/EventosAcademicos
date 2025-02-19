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
exports.Pessoa = exports.TipoPessoa = void 0;
const typeorm_1 = require("typeorm");
var TipoPessoa;
(function (TipoPessoa) {
    TipoPessoa["ORGANIZADOR"] = "organizador";
    TipoPessoa["PARTICIPANTE"] = "participante";
    TipoPessoa["PALESTRANTE"] = "palestrante";
    TipoPessoa["MEMBRO_EQUIPE"] = "membro_equipe";
})(TipoPessoa || (exports.TipoPessoa = TipoPessoa = {}));
let Pessoa = class Pessoa {
};
exports.Pessoa = Pessoa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pessoa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Pessoa.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Pessoa.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Pessoa.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: TipoPessoa,
        default: TipoPessoa.PARTICIPANTE,
    }),
    __metadata("design:type", String)
], Pessoa.prototype, "tipo", void 0);
exports.Pessoa = Pessoa = __decorate([
    (0, typeorm_1.Entity)("pessoas")
], Pessoa);
//# sourceMappingURL=pessoas.entity.js.map