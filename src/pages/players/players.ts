import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { PlayerDetailComponent } from '../player-detail/player-detail'
import { PlayerService } from "../../services/player-service";

@Component({
  selector: 'players',
  templateUrl: 'players.html'
})
export class PlayersComponent {
  public players;

  constructor(public navCtrl: NavController, public playerService: PlayerService) {
    this.playerService.getPlayers().subscribe(
      data => { this.players = data },
      err => console.error(err),
      () => console.log('done loading players')
    );
  }

  goToPlayer(player: object): void {
    this.navCtrl.push(PlayerDetailComponent, {"player" : player})
  }

  // filterItems(searchTerm){
  //   return this.players.filter((item) => {
  //     return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //   });
  //
  // }

}
