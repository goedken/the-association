import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'my-players',
  templateUrl: 'my-players.html'
})
export class MyPlayersComponent {

  constructor(public navCtrl: NavController) {
    // this.players = this.firebaseProvider.getPlayers();
  }

}
