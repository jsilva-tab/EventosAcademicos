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
exports.ModalidadeEsportivaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const equipe_entity_1 = require("../../shared/equipe.entity");
const atividadeEsportiva_entity_1 = require("../../shared/atividadeEsportiva.entity");
let ModalidadeEsportivaService = class ModalidadeEsportivaService {
    constructor(modalidadeRepository, equipeRepository) {
        this.modalidadeRepository = modalidadeRepository;
        this.equipeRepository = equipeRepository;
    }
    async create(createDto) {
        const existing = await this.modalidadeRepository.findOne({
            where: { nome: createDto.nome },
        });
        if (existing) {
            throw new common_1.ConflictException("Já existe uma modalidade esportiva com este nome");
        }
        const novaModalidade = this.modalidadeRepository.create(createDto);
        return this.modalidadeRepository.save(novaModalidade);
    }
    async findAll() {
        return this.modalidadeRepository.find();
    }
    async findOne(id) {
        const modalidade = await this.modalidadeRepository.findOne({
            where: { id },
        });
        if (!modalidade) {
            throw new common_1.NotFoundException(`Modalidade esportiva com ID ${id} não encontrada`);
        }
        return modalidade;
    }
    async update(id, updateDto) {
        const modalidade = await this.findOne(id);
        if (updateDto.nome && updateDto.nome !== modalidade.nome) {
            const existing = await this.modalidadeRepository.findOne({
                where: { nome: updateDto.nome },
            });
            if (existing) {
                throw new common_1.ConflictException("Já existe uma modalidade esportiva com este nome");
            }
        }
        Object.assign(modalidade, updateDto);
        return this.modalidadeRepository.save(modalidade);
    }
    async delete(id) {
        const modalidade = await this.findOne(id);
        const equipesCount = await this.equipeRepository
            .createQueryBuilder("equipe")
            .where("equipe.modalidade_esportiva_id = :id", { id })
            .getCount();
        if (equipesCount > 0) {
            throw new common_1.ConflictException("Não é possível excluir modalidade com equipes vinculadas");
        }
        await this.modalidadeRepository.delete(id);
    }
    async findByName(nome) {
        return this.modalidadeRepository.findOne({
            where: { nome },
        });
    }
};
exports.ModalidadeEsportivaService = ModalidadeEsportivaService;
exports.ModalidadeEsportivaService = ModalidadeEsportivaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(atividadeEsportiva_entity_1.ModalidadeEsportiva)),
    __param(1, (0, typeorm_1.InjectRepository)(equipe_entity_1.Equipe)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ModalidadeEsportivaService);
//# sourceMappingURL=modalidade-esportiva.service.js.map