import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { LogService } from './service/log.service';
import { TestService } from './service/test.service';
import { HeroListServiceService } from './service/hero-list-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers:[{provide:LogService,useClass:TestService}],

  bootstrap: [AppComponent]
})
export class AppModule { }
