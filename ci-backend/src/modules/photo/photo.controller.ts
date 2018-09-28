import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}

    @Get()
    findAll(): Promise<Photo[]> {
        return this.photoService.findAll();
    }

    @Get('/add')
    create(): Promise<Photo> {
        const photo = new Photo();
        photo.name = 'new photo';
        photo.description = 'nice photo';
        photo.filename = './file.jpg';
        photo.views = 1;
        photo.isPublished = true;

        return this.photoService.getRepository().save(photo);
    }
}