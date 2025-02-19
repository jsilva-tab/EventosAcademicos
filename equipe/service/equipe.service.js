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
exports.EquipeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const equipe_entity_1 = require("../../shared/equipe.entity");
const typeorm_2 = require("typeorm");
const modalidade_esportiva_service_1 = require("../../atividade/service/modalidade-esportiva.service");
const equipePessoa_entity_1 = require("../../shared/equipePessoa.entity");
const pessoas_entity_1 = require("../../shared/pessoas.entity");
let EquipeService = class EquipeService {
    constructor(equipeRepository, modalidadeService, equipePessoaRepository, pessoaRepository) {
        this.equipeRepository = equipeRepository;
        this.modalidadeService = modalidadeService;
        this.equipePessoaRepository = equipePessoaRepository;
        this.pessoaRepository = pessoaRepository;
    }
    async create(createEquipeDto) {
        const modalidade = await this.modalidadeService.findOne(createEquipeDto.modalidade_esportiva_id);
        const equipe = this.equipeRepository.create({
            ...createEquipeDto,
            modalidadeEsportiva: modalidade,
            ativa: true,
        });
        return this.equipeRepository.save(equipe);
    }
    async desativarEquipesVazias() {
        const periodoDesativacao = 30;
        const dataLimite = new Date();
        dataLimite.setDate(dataLimite.getDate() - periodoDesativacao);
        const equipes = await this.equipeRepository
            .createQueryBuilder("equipe")
            .leftJoinAndSelect("equipe.membros", "membros")
            .where("equipe.ativa = true")
            .andWhere("equipe.dataCriacao < :dataLimite", { dataLimite })
            .getMany();
        for (const equipe of equipes) {
            if (equipe.membros.length === 0) {
                equipe.ativa = false;
                await this.equipeRepository.save(equipe);
            }
        }
    }
    async findAll() {
        return this.equipeRepository.find({
            relations: ["modalidadeEsportiva", "membros"],
        });
    }
    async findOne(id) {
        return this.equipeRepository.findOne({
            where: { id },
            relations: ["modalidadeEsportiva", "membros"],
        });
    }
    async delete(id) {
        await this.equipeRepository.delete(id);
    }
    async update(id, updateDto) {
        const equipe = await this.equipeRepository.findOne({
            where: { id },
            relations: ["modalidadeEsportiva"],
        });
        if (!equipe) {
            throw new common_1.NotFoundException(`Equipe com ID ${id} não encontrada`);
        }
        Object.assign(equipe, updateDto);
        if (updateDto.membros_ids) {
            await this.atualizarMembros(equipe, updateDto.membros_ids);
        }
        return this.equipeRepository.save(equipe);
    }
    async atualizarMembros(equipe, novosMembrosIds) {
        await this.equipePessoaRepository
            .createQueryBuilder()
            .delete()
            .where("equipe_id = :equipeId", { equipeId: equipe.id })
            .andWhere("pessoa_id NOT IN (:...ids)", { ids: novosMembrosIds })
            .execute();
        const membrosExistentes = await this.equipePessoaRepository.find({
            where: { equipe: { id: equipe.id } },
            select: ["pessoa"],
        });
        const idsExistentes = membrosExistentes.map((me) => me.pessoa.id);
        const novosIds = novosMembrosIds.filter((id) => !idsExistentes.includes(id));
        if (novosIds.length > 0) {
            const pessoasInvalidas = await this.pessoaRepository
                .createQueryBuilder("pessoa")
                .where("pessoa.id IN (:...ids)", { ids: novosIds })
                .andWhere("pessoa.tipo != :tipo", { tipo: "membro_equipe" })
                .getCount();
            if (pessoasInvalidas > 0) {
                throw new common_1.ConflictException("Algumas pessoas não são do tipo membro_equipe");
            }
            const novosMembros = novosIds.map((pessoaId) => ({
                equipe: { id: equipe.id },
                pessoa: { id: pessoaId },
            }));
            await this.equipePessoaRepository
                .createQueryBuilder()
                .insert()
                .into(equipePessoa_entity_1.EquipePessoa)
                .values(novosMembros)
                .execute();
        }
    }
};
exports.EquipeService = EquipeService;
exports.EquipeService = EquipeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(equipe_entity_1.Equipe)),
    __param(2, (0, typeorm_1.InjectRepository)(equipePessoa_entity_1.EquipePessoa)),
    __param(3, (0, typeorm_1.InjectRepository)(pessoas_entity_1.Pessoa)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        modalidade_esportiva_service_1.ModalidadeEsportivaService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EquipeService);
//# sourceMappingURL=equipe.service.js.map