import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SportsComponent } from './sports/sports.component';
import { ListDaysComponent } from './list-days/list-days.component';


const routes: Routes = [
  { path: 'sports', component: SportsComponent},
  { path: '**', redirectTo: 'sports', pathMatch: 'full'},
  { path: ':name', component: ListDaysComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
    
})
  
export class AppRoutingModule { }
