import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PlayerService } from '../addplayer/player.service';
import { IPlayer } from "../addplayer/player";

@Component ({
    templateUrl: './composition.component.html',
    styleUrls: ['./composition.component.css']
})

export class CompositionComponent {
    
    players: IPlayer[] = [];
    errorMessage: string;

    constructor(private _playerService : PlayerService) {}
    
    ngOnInit() {
        this._playerService.getSelectedPlayers()
        .subscribe(players => this.players = players,
        error => this.errorMessage = <any>error)
        console.log(this.players);
        
    }
}