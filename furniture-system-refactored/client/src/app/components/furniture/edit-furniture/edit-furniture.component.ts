import {Component, OnInit} from '@angular/core';
import {FurnitureModel} from '../../../core/models/input/furniture.model';
import {FurnitureService} from '../../../core/services/furniture/furniture.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  private furniture: FurnitureModel;

  constructor(private furnitureService: FurnitureService, private router: ActivatedRoute,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.furnitureService.getById(this.router.snapshot.params['id'])
      .subscribe((res) => {
        this.furniture = res;
      }, error => console.log(error));
  }

  onSubmit() {
    this.furnitureService.editById(this.furniture.id, this.furniture).subscribe();
  }
}
