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
exports.Atividade = void 0;
const typeorm_1 = require("typeorm");
const evento_entity_1 = require("./evento.entity");
const tipoatividade_1 = require("./tipoatividade");
let Atividade = class Atividade {
};
exports.Atividade = Atividade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Atividade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Atividade.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Atividade.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime" }),
    __metadata("design:type", Date)
], Atividade.prototype, "data_hora", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Atividade.prototype, "local", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => evento_entity_1.Evento, (evento) => evento.atividades),
    (0, typeorm_1.JoinColumn)({ name: "evento_id" }),
    __metadata("design:type", evento_entity_1.Evento)
], Atividade.prototype, "evento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipoatividade_1.TipoAtividade),
    (0, typeorm_1.JoinColumn)({ name: "tipo_atividade_id" }),
    __metadata("design:type", tipoatividade_1.TipoAtividade)
], Atividade.prototype, "tipoAtividade", void 0);
exports.Atividade = Atividade = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)(["evento", "local", "data_hora"], { unique: true })
], Atividade);
//# sourceMappingURL=atividade.entity.js.map