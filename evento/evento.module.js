"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const evento_entity_1 = require("../shared/evento.entity");
const evento_controller_1 = require("./controller/evento.controller");
const evento_service_1 = require("./service/evento.service");
const tipoevento_entity_1 = require("../shared/tipoevento.entity");
let EventoModule = class EventoModule {
};
exports.EventoModule = EventoModule;
exports.EventoModule = EventoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([evento_entity_1.Evento, tipoevento_entity_1.TipoEvento])],
        controllers: [evento_controller_1.EventoController],
        providers: [evento_service_1.EventoService],
    })
], EventoModule);
//# sourceMappingURL=evento.module.js.map