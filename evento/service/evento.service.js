"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
let EventoService = class EventoService {
    constructor() {
        this.eventos = [];
    }
    create(createDto) {
        const evento = { id: this.eventos.length + 1, ...createDto };
        this.eventos.push(evento);
        return evento;
    }
    findAll() {
        return this.eventos;
    }
    findEventosAtivos() {
        return this.eventos.filter((evento) => evento.ativo);
    }
    findOne(id) {
        const evento = this.eventos.find((e) => e.id === id);
        if (!evento) {
            throw new common_1.NotFoundException(`Evento com ID ${id} não encontrado.`);
        }
        return evento;
    }
    update(id, updateDto) {
        const evento = this.findOne(id);
        Object.assign(evento, updateDto);
        return evento;
    }
    cancelarEvento(id) {
        const evento = this.findOne(id);
        evento.ativo = false;
        return evento;
    }
};
exports.EventoService = EventoService;
exports.EventoService = EventoService = __decorate([
    (0, common_1.Injectable)()
], EventoService);
//# sourceMappingURL=evento.service.js.map