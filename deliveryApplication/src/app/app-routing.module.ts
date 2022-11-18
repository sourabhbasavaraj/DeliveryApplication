import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminComponent } from './admin/admin.component';
import { CouponComponent } from './admin/coupon/coupon.component';
import { WarehouseInfoComponent } from './admin/warehouse-info/warehouse-info.component';
import { InventoryInfoComponent } from './admin/inventory-info/inventory-info.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'login', component : LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'admin', component: AdminComponent},
  {path:'coupon', component: CouponComponent},
  {path: 'wareouseinfo', component: WarehouseInfoComponent},
  {path: 'inventoryinfo', component: InventoryInfoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'price', component:PriceComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [HomePageComponent,LoginComponent];
