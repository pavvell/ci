import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class PhotoService {
  constructor(private http: HttpClient) {}

  public create() {
    return this.http.get('http://localhost:3000/photo/add').subscribe((photo) => {
      console.log('created...', photo);
    });
  }

  public get() {
    return this.http.get('http://localhost:3000/photo');
  }
}
