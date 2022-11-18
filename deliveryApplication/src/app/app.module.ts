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
import { DeliveryPartnerComponent } from './delivery-partner/delivery-partner.component';
import { UpdateDeliveryComponent } from './delivery-partner/update-delivery/update-delivery.component';
import { UpdatePickupComponent } from './delivery-partner/update-pickup/update-pickup.component';
import { RescheduleDeliveryComponent } from './delivery-partner/reschedule-delivery/reschedule-delivery.component';
import { NotifyUserComponent } from './delivery-partner/notify-user/notify-user.component';
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
    DeliveryPartnerComponent,
    DeliveryPartnerComponent,
    UpdateDeliveryComponent,
    UpdatePickupComponent,
    RescheduleDeliveryComponent,
    NotifyUserComponent,
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
