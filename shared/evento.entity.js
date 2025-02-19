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
exports.Evento = void 0;
const typeorm_1 = require("typeorm");
const atividade_entity_1 = require("./atividade.entity");
const pessoas_entity_1 = require("./pessoas.entity");
const tipoevento_entity_1 = require("./tipoevento.entity");
let Evento = class Evento {
};
exports.Evento = Evento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Evento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Evento.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Evento.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime" }),
    __metadata("design:type", Date)
], Evento.prototype, "data_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime" }),
    __metadata("design:type", Date)
], Evento.prototype, "data_fim", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Evento.prototype, "local", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pessoas_entity_1.Pessoa),
    (0, typeorm_1.JoinColumn)({ name: "organizador_id" }),
    __metadata("design:type", pessoas_entity_1.Pessoa)
], Evento.prototype, "organizador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipoevento_entity_1.TipoEvento, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "tipo_evento_id" }),
    __metadata("design:type", tipoevento_entity_1.TipoEvento)
], Evento.prototype, "tipoEvento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tipo_evento_id", nullable: true }),
    __metadata("design:type", Number)
], Evento.prototype, "tipoEventoId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => atividade_entity_1.Atividade, (atividade) => atividade.evento),
    __metadata("design:type", Array)
], Evento.prototype, "atividades", void 0);
exports.Evento = Evento = __decorate([
    (0, typeorm_1.Entity)()
], Evento);
//# sourceMappingURL=evento.entity.js.map