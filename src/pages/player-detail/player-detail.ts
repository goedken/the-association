import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlayerService } from "../../services/player-service";

import { Observable } from "rxjs/Observable"

@Component({
  selector: 'player-detail',
  templateUrl: 'player-detail.html'
})

export class PlayerDetailComponent {
  public player;
  public playerData;

  constructor(private navParams: NavParams, public playerService: PlayerService) {
    this.player = this.navParams.get("player");
    this.playerService.getPlayer(this.player.PERSON_ID).subscribe(
      data => { console.log(data); this.playerData = data },
      err => console.error(err),
      () => console.log('done loading player')
    );
  }

}
