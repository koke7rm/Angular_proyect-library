import { LoginService } from './services/loginService';
import { ComponentsModule } from './components/components.module';
import { EscritoresService } from './services/escritoresService';
import { LibrosService } from './services/librosService';
import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [LibrosService, EscritoresService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
