import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeamBuilderComponent } from './teambuilder/teambuilder.component';
import { CompositionComponent } from './composition/composition.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SaveComponent } from './save/save.component';
import { AddPlayerComponent} from './addplayer/addplayer.component';
 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PlayerData } from './shared/player-data';

@NgModule({
  declarations: [
    AppComponent,
    TeamBuilderComponent,
    CompositionComponent,
    WelcomeComponent,
    SaveComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(PlayerData),
    RouterModule.forRoot([
      { path : 'teambuilder', component : TeamBuilderComponent },
      { path : 'composition', component : CompositionComponent },
      { path : 'save', component : SaveComponent} ,
      { path : 'addplayer', component : AddPlayerComponent},
      { path : 'welcome', component : WelcomeComponent },
      { path : '', redirectTo: 'welcome', pathMatch: 'full' },
      { path : '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
