import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PackageEstimatorComponent } from './package-estimator/package-estimator.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { NearMeComponent } from './near-me/near-me.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { RateUsCompComponent } from './rate-us-comp/rate-us-comp.component';
import { DropOffPackageComponent } from './drop-off-package/drop-off-package.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    PackageEstimatorComponent,
    CustomerLoginComponent,
    NearMeComponent,
    RateUsCompComponent,
    DropOffPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//wujqdlefrxmhnwfqcs@tmmcv.net
