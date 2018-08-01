import {Component, OnInit} from '@angular/core';
import {FurnitureService} from '../services/furniture.service';
import {Furniture} from '../models/Furniture';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  private furniture: Furniture;

  constructor(private furnitureService: FurnitureService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.furnitureService.findById(params['id'])
        .subscribe((res) => {
          this.furniture = res;
        }, error => console.log(error));
    });

  }
}
