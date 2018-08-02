import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FurnitureService} from '../services/furniture.service';
import {Furniture} from '../models/Furniture';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  private furnitures: any;

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
