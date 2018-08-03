import {Component, OnInit} from '@angular/core';
import {FurnitureService} from '../../../core/services/furniture/furniture.service';
import {FurnitureModel} from '../../../core/models/input/furniture.model';
import {AuthService} from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  p = 1;
  private furnitures: FurnitureModel[];

  constructor(private furnitureService: FurnitureService, private _authService: AuthService) {
  }

  ngOnInit() {
    this.furnitureService.findAll()
      .subscribe((res) => {
        this.furnitures = res;
      }, error => console.log(error));
  }

  deleteFurniture(id: number) {
    this.furnitureService.deleteById(id).subscribe();
    this.ngOnInit();
  }

  get authService(): AuthService {
    return this._authService;
  }
}
