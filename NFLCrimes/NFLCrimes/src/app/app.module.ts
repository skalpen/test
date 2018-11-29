import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TopCrimes } from './crimes/crimes-list.top.component';
import { TopPlayersCrimes } from './crimes/crimes-list.top-players.component';
import { TopTeamsCrimes } from './crimes/crimes-list.top-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCrimes,
    TopPlayersCrimes,
    TopTeamsCrimes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
