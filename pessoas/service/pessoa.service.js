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
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pessoas_entity_1 = require("../../shared/pessoas.entity");
const typeorm_2 = require("typeorm");
let PessoaService = class PessoaService {
    constructor(pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }
    validatePhone(phone) {
        const regex = /^\+[1-9]\d{1,14}$/;
        return regex.test(phone);
    }
    async create(createPessoaDto) {
        const existing = await this.pessoaRepository.findOne({
            where: { email: createPessoaDto.email },
        });
        if (existing) {
            throw new common_1.ConflictException("Email já cadastrado");
        }
        if (!this.validatePhone(createPessoaDto.telefone)) {
            throw new common_1.BadRequestException("Formato de telefone inválido");
        }
        if (!Object.values(pessoas_entity_1.TipoPessoa).includes(createPessoaDto.tipo)) {
            throw new common_1.BadRequestException("Tipo de pessoa inválido");
        }
        const pessoa = this.pessoaRepository.create(createPessoaDto);
        return this.pessoaRepository.save(pessoa);
    }
    async findAll() {
        return this.pessoaRepository.find();
    }
    async findOne(id) {
        const pessoa = await this.pessoaRepository.findOne({ where: { id } });
        if (!pessoa)
            throw new common_1.NotFoundException("Pessoa não encontrada");
        return pessoa;
    }
    async update(id, updatePessoaDto) {
        const pessoa = await this.findOne(id);
        if (updatePessoaDto.email && updatePessoaDto.email !== pessoa.email) {
            const existing = await this.pessoaRepository.findOne({
                where: { email: updatePessoaDto.email },
            });
            if (existing)
                throw new common_1.ConflictException("Email já cadastrado");
        }
        if (updatePessoaDto.telefone &&
            !this.validatePhone(updatePessoaDto.telefone)) {
            throw new common_1.BadRequestException("Formato de telefone inválido");
        }
        return this.pessoaRepository.save({ ...pessoa, ...updatePessoaDto });
    }
    async delete(id) {
        const pessoa = await this.findOne(id);
        await this.pessoaRepository.remove(pessoa);
    }
    async findByTipo(tipo) {
        return this.pessoaRepository.find({ where: { tipo } });
    }
};
exports.PessoaService = PessoaService;
exports.PessoaService = PessoaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pessoas_entity_1.Pessoa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PessoaService);
//# sourceMappingURL=pessoa.service.js.map