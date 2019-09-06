import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SalaComponent } from './sala/sala.component';
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalaComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
