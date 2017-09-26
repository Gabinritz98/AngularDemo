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
    errorMessage: string;

    constructor(private _playerService: PlayerService, private _router : Router) {}

    ngOnInit() {
        this._playerService.getPlayers()
        .subscribe(players => this.players = players,
        error => this.errorMessage = <any>error)
    }
    onTeamView(): void {
        this._router.navigate(['/teambuilder']);
    }
    onGetThisPlayer(player: IPlayer, index: number){
        this.players.splice(index, 1);
        console.log(player);
        this._playerService.updatePlayers(this.players);
        
    }
}