import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SportsComponent } from './sports/sports.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SportService } from './sport.service';
import { ListDaysComponent } from './list-days/list-days.component';


@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    ListDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
