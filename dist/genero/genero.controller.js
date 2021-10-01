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
exports.GeneroController = void 0;
const common_1 = require("@nestjs/common");
const genero_service_1 = require("./genero.service");
const create_genero_dto_1 = require("./dto/create-genero.dto");
let GeneroController = class GeneroController {
    constructor(generoService) {
        this.generoService = generoService;
    }
    async index() {
        return this.generoService.getAll();
    }
    async getById(id) {
        return this.generoService.getByIdGenero(+id);
    }
    async create(createGenero) {
        return this.generoService.createGenero(createGenero);
    }
    async update(id, genero) {
        return this.generoService.updateGenero(+id, genero);
    }
    async deleteGenero(id) {
        return this.generoService.deleteGenero({ id: Number(id) });
    }
    async deleteAll() {
        return this.generoService.deleteAll();
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('/list/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genero_dto_1.CreateGeneroDto]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_genero_dto_1.CreateGeneroDto]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "deleteGenero", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GeneroController.prototype, "deleteAll", null);
GeneroController = __decorate([
    (0, common_1.Controller)('/genero'),
    __metadata("design:paramtypes", [genero_service_1.GeneroService])
], GeneroController);
exports.GeneroController = GeneroController;
//# sourceMappingURL=genero.controller.js.map