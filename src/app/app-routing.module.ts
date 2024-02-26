import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminPage } from './admin/admin.page';
import { AuthenticationGuard } from './shared/guard/authentication.guard';
import { LoginPage } from './admin/login/login.page';
import { CustomerPage } from './customer/customer.page';

const routes: Routes = [
  {path: 'login', component: LoginPage},
  {
    path: 'admin',
    component: MainAdminPage, 
    loadChildren:() => import('./admin/admin.module').then(m =>m.AdminModule),
    canActivateChild: [AuthenticationGuard],
  },
  {
    path: 'customer',
    component: CustomerPage, 
    loadChildren:() => import('./customer/customer.module').then(m =>m.CustomerModule),
  },
  {
    path: '404',
    component: CustomerPage,
  },
  {path: '', redirectTo: 'customer/home', pathMatch:'full'},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
