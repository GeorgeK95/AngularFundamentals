import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/guard/auth.guard';
import {ProtectedComponent} from './protected/protected.component';

const FULL = 'full';
const appRoutes = [
  {path: '', component: HomeComponent, pathMatch: FULL},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]/*, pathMatch: FULL*/},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRouter {
}
