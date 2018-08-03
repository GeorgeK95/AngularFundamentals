import {AuthGuard} from '../../core/guards/auth/auth.guard';
import {CreateFurnitureComponent} from './create-furniture/create-furniture.component';
import {AllFurnitureComponent} from './all-furniture/all-furniture.component';
import {MyFurnitureComponent} from './my-furniture/my-furniture.component';
import {FurnitureDetailsComponent} from './furniture-details/furniture-details.component';
import {EditFurnitureComponent} from './edit-furniture/edit-furniture.component';

export const furnitureRoutes = [
  {
    path: 'furniture', children: [
      {path: 'create', component: CreateFurnitureComponent, canActivate: [AuthGuard]},
      {path: 'all', component: AllFurnitureComponent},
      {path: 'mine', component: MyFurnitureComponent, canActivate: [AuthGuard]},
      {path: 'details/:id', component: FurnitureDetailsComponent, canActivate: [AuthGuard]},
      {path: 'edit/:id', component: EditFurnitureComponent, canActivate: [AuthGuard]}
    ]
  }
];
