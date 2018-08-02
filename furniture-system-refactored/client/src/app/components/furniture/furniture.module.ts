import {NgModule} from '@angular/core';
import {furnitureComponents} from './index';
import {RouterModule} from '@angular/router';
import {furnitureRoutes} from './furnitures.routing';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forChild(furnitureRoutes)
  ],
  declarations: [
    ...furnitureComponents
  ]
})

export class FurnitureModule {
}
