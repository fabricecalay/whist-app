import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'; // <-- Http Client lives here

import { AppComponent } from './app.component';
import { WhistComponent } from './whist/whist.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

import { PlayerService } from './player.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerSearchComponent } from './player-search/player-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WhistComponent,
    PlayerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlayerSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PlayerService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
