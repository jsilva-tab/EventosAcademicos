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
exports.Inscricao = void 0;
const typeorm_1 = require("typeorm");
const atividade_entity_1 = require("./atividade.entity");
const evento_entity_1 = require("./evento.entity");
const pessoas_entity_1 = require("./pessoas.entity");
let Inscricao = class Inscricao {
};
exports.Inscricao = Inscricao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inscricao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pessoas_entity_1.Pessoa),
    (0, typeorm_1.JoinColumn)({ name: "pessoa_id" }),
    __metadata("design:type", pessoas_entity_1.Pessoa)
], Inscricao.prototype, "pessoa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => evento_entity_1.Evento),
    (0, typeorm_1.JoinColumn)({ name: "evento_id" }),
    __metadata("design:type", evento_entity_1.Evento)
], Inscricao.prototype, "evento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => atividade_entity_1.Atividade),
    (0, typeorm_1.JoinColumn)({ name: "atividade_id" }),
    __metadata("design:type", atividade_entity_1.Atividade)
], Inscricao.prototype, "atividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime" }),
    __metadata("design:type", Date)
], Inscricao.prototype, "data_inscricao", void 0);
exports.Inscricao = Inscricao = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)(["pessoa", "atividade"], { unique: true })
], Inscricao);
//# sourceMappingURL=inscricao.entity.js.map