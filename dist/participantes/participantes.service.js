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
exports.ParticipantesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ParticipantesService = class ParticipantesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async participante(participanteWhereUniqueInput) {
        return this.prisma.participante.findUnique({
            where: participanteWhereUniqueInput,
        });
    }
    async participantes(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.participante.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async getAll() {
        return this.prisma.participante.findMany();
    }
    async getByIdParticipante(id) {
        return this.prisma.participante.findUnique({
            where: { id },
        });
    }
    async createParticipante(data) {
        return this.prisma.participante.create({ data });
    }
    async updateParticipante(id, data) {
        return this.prisma.participante.update({
            where: { id },
            data,
        });
    }
    async deleteParticipante(where) {
        return this.prisma.participante.delete({
            where,
        });
    }
    async deleteAll() {
        return this.prisma.participante.deleteMany({});
    }
};
ParticipantesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParticipantesService);
exports.ParticipantesService = ParticipantesService;
//# sourceMappingURL=participantes.service.js.map