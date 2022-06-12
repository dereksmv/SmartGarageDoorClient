import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageIndicatorComponent } from './components/pages/garage-page/garage-indicator/garage-indicator.component';
import { LoginPageComponent } from './components/pages/login-page/login-page/login-page.component';
import { PermissionGuardService } from './permission-guard.service';

const routes: Routes = [
  { path: '', component: GarageIndicatorComponent, canActivate: [PermissionGuardService] },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
