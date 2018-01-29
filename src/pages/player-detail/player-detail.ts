import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlayerService } from "../../services/player-service";

import { Observable } from "rxjs/Observable"

@Component({
  selector: 'player-detail',
  templateUrl: 'player-detail.html'
})

export class PlayerDetailComponent {
  public playerInfo;
  public playerData;
  public loadingPlayerData = true;

  constructor(private navParams: NavParams, public playerService: PlayerService) {
    this.playerInfo = this.navParams.get("player");
    console.log(this.playerInfo);
    this.playerService.getPlayer(this.playerInfo.PERSON_ID).subscribe(
      data => {
        this.playerData = data[0];
        console.log(this.playerData);
      },
      err => console.error(err),
      () => {
        this.loadingPlayerData = false;
      }
    );
  }

}
