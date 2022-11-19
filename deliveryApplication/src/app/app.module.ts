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
import { AdminComponent } from './admin/admin.component';
import { CouponComponent } from './admin/coupon/coupon.component';
import { WarehouseInfoComponent } from './admin/warehouse-info/warehouse-info.component';
import { InventoryInfoComponent } from './admin/inventory-info/inventory-info.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DeliveryPartnerLoginComponent } from './delivery-partner-login/delivery-partner-login.component';
import { TrackingDataComponent } from './tracking-data/tracking-data.component';

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
    UpdateDeliveryComponent,
    UpdatePickupComponent,
    RescheduleDeliveryComponent,
    NotifyUserComponent,DropOffPackageComponent,
    AdminComponent,
    CouponComponent,
    WarehouseInfoComponent,
    InventoryInfoComponent,
    AboutComponent,
    ServicesComponent,
    PriceComponent,
    ContactComponent,
    DeliveryPartnerComponent,
    DropOffPackageComponent,
    AdminLoginComponent,
    DeliveryPartnerLoginComponent,
    TrackingDataComponent
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
