import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component"
import { AccueilComponent } from "./accueil/accueil.component"
import {AdminUserComponent} from "./admin-user/admin-user.component"

const routes: Routes = [
  {path: '', component: LoginComponent,},
  {path: 'login', component: LoginComponent,},
  {path: 'home', component: AccueilComponent,},
  {path: 'accueil', component: AccueilComponent,},
  {path: 'admin', component: AdminUserComponent,},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
