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
exports.Equipe = void 0;
const typeorm_1 = require("typeorm");
const atividadeEsportiva_entity_1 = require("./atividadeEsportiva.entity");
const equipePessoa_entity_1 = require("./equipePessoa.entity");
let Equipe = class Equipe {
};
exports.Equipe = Equipe;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Equipe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Equipe.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => atividadeEsportiva_entity_1.ModalidadeEsportiva),
    (0, typeorm_1.JoinColumn)({ name: "modalidade_esportiva_id" }),
    __metadata("design:type", atividadeEsportiva_entity_1.ModalidadeEsportiva)
], Equipe.prototype, "modalidadeEsportiva", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => equipePessoa_entity_1.EquipePessoa, (equipePessoa) => equipePessoa.equipe),
    __metadata("design:type", Array)
], Equipe.prototype, "membros", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Equipe.prototype, "ativa", void 0);
exports.Equipe = Equipe = __decorate([
    (0, typeorm_1.Entity)()
], Equipe);
//# sourceMappingURL=equipe.entity.js.map