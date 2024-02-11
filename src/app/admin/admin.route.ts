import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminPage } from './admin.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { FoodPage } from './food/food.page';
import { FoodNewPage } from './food/food-new.page';
import { LoginPage } from './login/login.page';

const routes: Routes = [
    {path: 'admin', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: DashboardPage},
    {path: 'foods', component: FoodPage},
    {path: 'foods/new', component: FoodNewPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouteModule { }
