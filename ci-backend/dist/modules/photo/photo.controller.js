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
const common_1 = require("@nestjs/common");
const photo_service_1 = require("./photo.service");
const photo_entity_1 = require("./photo.entity");
let PhotoController = class PhotoController {
    constructor(photoService) {
        this.photoService = photoService;
    }
    findAll() {
        return this.photoService.findAll();
    }
    create() {
        const photo = new photo_entity_1.Photo();
        photo.name = 'new photo';
        photo.description = 'nice photo';
        photo.filename = './file.jpg';
        photo.views = 1;
        photo.isPublished = true;
        return this.photoService.getRepository().save(photo);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "findAll", null);
__decorate([
    common_1.Get('/add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "create", null);
PhotoController = __decorate([
    common_1.Controller('photo'),
    __metadata("design:paramtypes", [photo_service_1.PhotoService])
], PhotoController);
exports.PhotoController = PhotoController;
//# sourceMappingURL=photo.controller.js.map