import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MyPlayersComponent } from '../pages/my-players/my-players';
import { PlayersComponent } from '../pages/players/players';
import { PlayerDetailComponent } from '../pages/player-detail/player-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from "../services/player-service";

@NgModule({
  declarations: [
    MyApp,
    PlayersComponent,
    MyPlayersComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlayersComponent,
    MyPlayersComponent,
    PlayerDetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlayerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
