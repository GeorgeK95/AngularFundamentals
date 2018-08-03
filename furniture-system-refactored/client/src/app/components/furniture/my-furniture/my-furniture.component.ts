import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FurnitureService} from '../../../core/services/furniture/furniture.service';
import {FurnitureModel} from '../../../core/models/input/furniture.model';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  private furnitures: FurnitureModel[];

  constructor(private furnitureService: FurnitureService) {
  }

  ngOnInit() {
    this.furnitureService.getMine()
      .subscribe((res) => {
        this.furnitures = res;
      }, error => console.log(error));
  }

  deleteFurniture(id: number) {
    this.furnitureService.deleteById(id).subscribe();
    this.ngOnInit();
  }
}
