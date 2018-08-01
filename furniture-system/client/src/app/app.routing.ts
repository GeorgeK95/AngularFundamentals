import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './authentication/signin/signin.component';
import {SignupComponent} from './authentication/signup/signup.component';
import {CreateFurnitureComponent} from './furniture/create-furniture/create-furniture.component';
import {AllFurnitureComponent} from './furniture/all-furniture/all-furniture.component';
import {MyFurnitureComponent} from './furniture/my-furniture/my-furniture.component';
import {FurnitureDetailsComponent} from './furniture/furniture-details/furniture-details.component';
import {AuthGuard} from './authentication/guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'furniture', canActivate: [AuthGuard], children: [
      {path: 'create', component: CreateFurnitureComponent},
      {path: 'all', component: AllFurnitureComponent},
      {path: 'mine', component: MyFurnitureComponent},
      {path: 'details/:id', component: FurnitureDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}