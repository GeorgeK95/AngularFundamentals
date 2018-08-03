import {Component, OnInit} from '@angular/core';
import {FurnitureService} from '../../../core/services/furniture/furniture.service';
import {FurnitureModel} from '../../../core/models/input/furniture.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  private furniture: FurnitureModel;

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
