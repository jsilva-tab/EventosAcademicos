"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoEventoService = void 0;
const common_1 = require("@nestjs/common");
let TipoEventoService = class TipoEventoService {
    async update(id, updateDto) {
        const tipo = await this.findOne(id);
        const emUso = await this.eventoRepository.exists({
            where: { tipoEvento: { id } },
        });
        if (emUso)
            throw new common_1.ForbiddenException("Tipo de evento já está em uso e não pode ser alterado");
        return this.tipoEventoRepository.save(Object.assign({}, tipo, updateDto));
    }
    async findOne(id) {
        const tipo = await this.tipoEventoRepository.findOne({
            where: { id },
        });
        if (!tipo) {
            throw new common_1.NotFoundException(`Tipo de evento com ID ${id} não encontrado`);
        }
        return tipo;
    }
    async findAll() {
        return this.tipoEventoRepository.find();
    }
};
exports.TipoEventoService = TipoEventoService;
exports.TipoEventoService = TipoEventoService = __decorate([
    (0, common_1.Injectable)()
], TipoEventoService);
//# sourceMappingURL=tipoEvento.service.js.map