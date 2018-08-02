import {Component, OnInit} from '@angular/core';
import {Furniture} from '../models/Furniture';
import {FurnitureService} from '../services/furniture.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  private furnitures: any;

  constructor(private furnitureService: FurnitureService) {
  }

  ngOnInit() {
    this.furnitureService.findAll()
      .subscribe((res) => {
        this.furnitures = res;
      }, error => console.log(error));
  }

}
