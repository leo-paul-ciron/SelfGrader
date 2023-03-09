import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    AdminUserComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
