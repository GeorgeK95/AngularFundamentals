import {Component, OnInit} from '@angular/core';
import {FurnitureService} from '../../../core/services/furniture/furniture.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  p = 1;
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
