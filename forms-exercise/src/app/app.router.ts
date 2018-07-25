import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Register} from 'ts-node';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRouter {
}
