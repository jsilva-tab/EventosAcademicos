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
exports.PalestranteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const palestrante_entity_1 = require("../../shared/palestrante.entity");
const pessoas_entity_1 = require("../../shared/pessoas.entity");
const typeorm_2 = require("typeorm");
let PalestranteService = class PalestranteService {
    constructor(palestranteRepository, pessoaRepository) {
        this.palestranteRepository = palestranteRepository;
        this.pessoaRepository = pessoaRepository;
    }
    async create(createDto) {
        const pessoa = await this.pessoaRepository.findOne({
            where: { id: createDto.pessoa_id },
        });
        if (!pessoa) {
            throw new common_1.NotFoundException("Pessoa não encontrada");
        }
        if (pessoa.tipo !== pessoas_entity_1.TipoPessoa.PALESTRANTE) {
            throw new common_1.BadRequestException("A pessoa deve ser do tipo palestrante");
        }
        if (!createDto.instituicao) {
            throw new common_1.BadRequestException("Instituição é obrigatória");
        }
        const existing = await this.palestranteRepository.findOne({
            where: { pessoa: { id: createDto.pessoa_id } },
        });
        if (existing) {
            throw new common_1.ConflictException("Esta pessoa já está cadastrada como palestrante");
        }
        const novoPalestrante = this.palestranteRepository.create({
            ...createDto,
            pessoa,
        });
        return this.palestranteRepository.save(novoPalestrante);
    }
    async findAll() {
        return this.palestranteRepository.find({ relations: ["pessoa"] });
    }
    async findOne(id) {
        const palestrante = await this.palestranteRepository.findOne({
            where: { id },
            relations: ["pessoa"],
        });
        if (!palestrante) {
            throw new common_1.NotFoundException(`Palestrante com ID ${id} não encontrado`);
        }
        return palestrante;
    }
    async update(id, updateDto) {
        const palestrante = await this.findOne(id);
        if (updateDto.pessoa_id && updateDto.pessoa_id !== palestrante.pessoa.id) {
            const novaPessoa = await this.pessoaRepository.findOne({
                where: { id: updateDto.pessoa_id },
            });
            if (!novaPessoa) {
                throw new common_1.NotFoundException("Nova pessoa não encontrada");
            }
            if (novaPessoa.tipo !== pessoas_entity_1.TipoPessoa.PALESTRANTE) {
                throw new common_1.BadRequestException("A nova pessoa deve ser do tipo palestrante");
            }
            palestrante.pessoa = novaPessoa;
        }
        if (updateDto.instituicao) {
            palestrante.instituicao = updateDto.instituicao;
        }
        if (updateDto.biografia) {
            if (updateDto.biografia.length > 2000) {
                throw new common_1.BadRequestException("Biografia deve ter no máximo 2000 caracteres");
            }
            palestrante.biografia = updateDto.biografia;
        }
        return this.palestranteRepository.save(palestrante);
    }
    async delete(id) {
        const palestrante = await this.findOne(id);
        await this.palestranteRepository.remove(palestrante);
    }
    async findByInstituicao(instituicao) {
        return this.palestranteRepository
            .createQueryBuilder("palestrante")
            .where("LOWER(palestrante.instituicao) LIKE LOWER(:instituicao)", {
            instituicao: `%${instituicao}%`,
        })
            .getMany();
    }
};
exports.PalestranteService = PalestranteService;
exports.PalestranteService = PalestranteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(palestrante_entity_1.Palestrante)),
    __param(1, (0, typeorm_1.InjectRepository)(pessoas_entity_1.Pessoa)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PalestranteService);
//# sourceMappingURL=palestrante.service.js.map