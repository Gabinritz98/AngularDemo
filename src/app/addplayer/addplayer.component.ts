import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from './player.service';
import { IPlayer } from './player';

@Component ({
    templateUrl: './addplayer.component.html',
    styleUrls: ['./addplayer.component.css']
})

export class AddPlayerComponent {

    players: IPlayer[] = []; 

    constructor(private _playerService: PlayerService, private _router : Router) {}

    ngOnInit() {
        this.players = this._playerService.getPlayers();
        console.log(this.players);
    }
    onTeamView(): void {
        this._router.navigate(['/teambuilder']);
    }
    onGetThisPlayer(player) {
        console.log(player);
    }
}