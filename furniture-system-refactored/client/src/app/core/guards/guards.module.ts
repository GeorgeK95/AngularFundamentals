import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuard} from './auth/auth.guard';

@NgModule({
  providers: [AuthGuard],
  imports: [
    CommonModule
  ]
})
export class GuardsModule {
}
