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
  public filteredPlayers;
  public loading = true;
  public searchText = '';

  constructor(public navCtrl: NavController, public playerService: PlayerService) {
    this.playerService.getPlayers().subscribe(
      data => {
        this.players = data;
        this.filteredPlayers = data;
      },
      err => console.error(err),
      () => {
        this.loading = false;
      }
    );
  }

  goToPlayer(player: object): void {
    this.navCtrl.push(PlayerDetailComponent, {"player" : player})
  }

  filterPlayers(searchTerm){
    this.filteredPlayers = this.players.filter((player) => {
      return player.DISPLAY_FIRST_LAST.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
