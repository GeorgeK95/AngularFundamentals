import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {SigninComponent} from './authentication/signin/signin.component';
import {SignupComponent} from './authentication/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {AuthService} from './authentication/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {CreateFurnitureComponent} from './furniture/create-furniture/create-furniture.component';
import {AllFurnitureComponent} from './furniture/all-furniture/all-furniture.component';
import {FurnitureDetailsComponent} from './furniture/furniture-details/furniture-details.component';
import {MyFurnitureComponent} from './furniture/my-furniture/my-furniture.component';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {SignInInterceptor} from './interceptors/sign-in.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    CreateFurnitureComponent,
    AllFurnitureComponent,
    FurnitureDetailsComponent,
    MyFurnitureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    AuthService,
    // FurnitureService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SignInInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
