import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormService} from '../service/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() private foundMovies: EventEmitter<any> = new EventEmitter<any>();
  @Output() private searchedFor: EventEmitter<string> = new EventEmitter<string>();

  constructor(private service: FormService) {
  }

  search(searchQuery) {
    this.service.findMovie(searchQuery.search)
      .subscribe(res => {
        this.foundMovies.emit(res);
        this.searchedFor.emit(searchQuery.search);
      });
  }

  ngOnInit() {
  }

}
