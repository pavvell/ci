import { Component } from '@angular/core';
import {PhotoService} from "./photo/photo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ci-frontend';
  photos: any[] = [];

  constructor(private photoService: PhotoService) {}

  createPhoto() {
    this.photoService.create();
  }

  getPhotos() {
    this.photoService.get().subscribe((photos) => {
      this.photos = photos as any[];
    });
  }
}
