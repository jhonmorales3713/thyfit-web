import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminPage } from './admin/admin.page';
import { AuthenticationGuard } from './shared/guard/authentication.guard';
import { LoginPage } from './admin/login/login.page';

const routes: Routes = [
  {path: 'login', component: LoginPage},
  {
    path: 'admin',
    component: MainAdminPage, 
    loadChildren:() => import('./admin/admin.module').then(m =>m.AdminModule),
    canActivateChild: [AuthenticationGuard],
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
