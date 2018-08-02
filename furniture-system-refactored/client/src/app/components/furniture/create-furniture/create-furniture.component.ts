import {Component, OnInit} from '@angular/core';
import {FurnitureModel} from '../../../core/models/input/furniture.model';
import {FurnitureService} from '../../../core/services/furniture/furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {

  private furniture: FurnitureModel;

  constructor(private furnitureService: FurnitureService) {
  }

  onSubmit() {
    this.furnitureService.create(this.furniture).subscribe();
  }

  ngOnInit() {
    this.furniture = new FurnitureModel('', '', '', 0, 0, '', '', '');
  }
}
