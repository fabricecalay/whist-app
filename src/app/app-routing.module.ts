import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { WhistComponent }      from './whist/whist.component';
import { PlayerDetailComponent }      from './player-detail/player-detail.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'whist', component: WhistComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}


