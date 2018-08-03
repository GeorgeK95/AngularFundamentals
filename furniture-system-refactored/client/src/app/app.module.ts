import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AuthService} from './core/services/auth/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {TokenInterceptor} from './core/interceptors/token.interceptor';
import {SignInInterceptor} from './core/interceptors/sign-in.interceptor';
import {ErrorInterceptor} from './core/interceptors/error.interceptor';
import {AuthModule} from './components/authentication/auth.module';
import {SharedModule} from './components/shared/shared.module';
import {ServiceModule} from './core/services/services.module';
import {FurnitureModule} from './components/furniture/furniture.module';
import {GuardsModule} from './core/guards/guards.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    ServiceModule,
    AuthModule,
    FormsModule,
    SharedModule,
    GuardsModule,
    FurnitureModule
  ],
  providers: [
    AuthService,
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
