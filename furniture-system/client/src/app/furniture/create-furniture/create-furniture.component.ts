import {Component, OnInit} from '@angular/core';
import {Furniture} from '../models/Furniture';
import {FurnitureService} from '../services/furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {

  private furniture: Furniture;

  constructor(private furnitureService: FurnitureService) {
  }

  onSubmit() {
    this.furnitureService.create(this.furniture).subscribe();
  }

  ngOnInit() {
    this.furniture = new Furniture('', '', '', 0, 0, '', '', '');
  }
}
