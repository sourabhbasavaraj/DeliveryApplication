import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PackageEstimatorComponent } from './package-estimator/package-estimator.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { NearMeComponent } from './near-me/near-me.component';
import { RateUsCompComponent } from './rate-us-comp/rate-us-comp.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'login', component : LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'getEstimate', component:PackageEstimatorComponent},
  { path: 'customerLogin', component: CustomerLoginComponent},
  { path:'nearMe', component: NearMeComponent},
  { path:'rateUs', component: RateUsCompComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [HomePageComponent,LoginComponent];
