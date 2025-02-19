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
exports.AtividadeService = void 0;
const common_1 = require("@nestjs/common");
const atividade_entity_1 = require("../../shared/atividade.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AtividadeService = class AtividadeService {
    constructor(atividadeRepository) {
        this.atividadeRepository = atividadeRepository;
    }
    async create(createDto) {
        const atividade = this.atividadeRepository.create(createDto);
        return await this.atividadeRepository.save(atividade);
    }
    async findAll() {
        return await this.atividadeRepository.find();
    }
    async findOne(id) {
        const atividade = await this.atividadeRepository.findOne({ where: { id } });
        if (!atividade) {
            throw new common_1.BadRequestException("Atividade não encontrada");
        }
        return atividade;
    }
    async findByEvento(eventoId) {
        return await this.atividadeRepository.find({
            where: { evento: { id: eventoId } },
        });
    }
    async update(id, updateDto) {
        const atividade = await this.findOne(id);
        return await this.atividadeRepository.save(Object.assign(atividade, updateDto));
    }
    async delete(id) {
        const atividade = await this.findOne(id);
        await this.atividadeRepository.remove(atividade);
    }
    async atualizarDataAtividade(id, novaData) {
        const atividade = await this.atividadeRepository.findOne({
            where: { id },
            relations: ["evento"],
        });
        if (!atividade) {
            throw new common_1.BadRequestException("Atividade não encontrada");
        }
        if (novaData < atividade.evento.data_inicio ||
            novaData > atividade.evento.data_fim) {
            throw new common_1.BadRequestException("Nova data fora do intervalo do evento");
        }
        atividade.data_hora = novaData;
        return await this.atividadeRepository.save(atividade);
    }
    async verificarConflitos(atividadeId) {
        const atividade = await this.atividadeRepository.findOne({
            where: { id: atividadeId },
            relations: ["evento"],
        });
        if (!atividade) {
            throw new common_1.BadRequestException("Atividade não encontrada");
        }
        const conflitos = await this.atividadeRepository
            .createQueryBuilder("atividade")
            .where("atividade.eventoId = :eventoId", {
            eventoId: atividade.evento.id,
        })
            .andWhere("atividade.local = :local", { local: atividade.local })
            .andWhere("atividade.data_hora = :dataHora", {
            dataHora: atividade.data_hora,
        })
            .andWhere("atividade.id != :atividadeId", { atividadeId })
            .getCount();
        return conflitos > 0;
    }
};
exports.AtividadeService = AtividadeService;
exports.AtividadeService = AtividadeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(atividade_entity_1.Atividade)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AtividadeService);
//# sourceMappingURL=atividade.service.js.map