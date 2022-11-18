import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { CouponComponent } from './admin/coupon/coupon.component';
import { WarehouseInfoComponent } from './admin/warehouse-info/warehouse-info.component';
import { InventoryInfoComponent } from './admin/inventory-info/inventory-info.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    CouponComponent,
    WarehouseInfoComponent,
    InventoryInfoComponent,
    AboutComponent,
    ServicesComponent,
    PriceComponent,
    ContactComponent
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
