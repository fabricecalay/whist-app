import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WhistComponent }      from './whist/whist.component';
import { PlayerDetailComponent }      from './player-detail/player-detail.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'whist', component: WhistComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}


