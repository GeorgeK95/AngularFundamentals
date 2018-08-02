import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FurnitureModel} from '../../models/input/furniture.model';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  readonly createUrl = 'http://localhost:5000/furniture/create';
  readonly findAllUrl = 'http://localhost:5000/furniture/all';
  readonly mineUrl = 'http://localhost:5000/furniture/mine';
  readonly findByIdUrl = 'http://localhost:5000/furniture/details/';
  readonly deleteByIdUrl = 'http://localhost:5000/furniture/delete/';

  constructor(private http: HttpClient) {
  }

  create(body: FurnitureModel) {
    return this.http.post(this.createUrl, body);
  }

  findAll() {
    return this.http.get(this.findAllUrl);
  }

  findById(id: number) {
    return this.http.get(this.findByIdUrl.concat(String(id)));
  }

  deleteById(id: number) {
    return this.http.delete(this.deleteByIdUrl.concat(String(id)));
  }

  getMine() {
    return this.http.get(this.mineUrl);
  }
}
