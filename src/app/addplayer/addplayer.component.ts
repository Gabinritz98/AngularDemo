import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from './player.service';
import { IPlayer } from './player';
import { Observable } from "rxjs/Rx";
import { FormsModule } from '@angular/forms';

@Component ({ 
    templateUrl: './addplayer.component.html',
    styleUrls: ['./addplayer.component.css']
})

export class AddPlayerComponent {

    players: IPlayer[] = [];
    inputPlayerName: string;
    inputPlayerPosition: string;
    inputPlayerAge: number;
    inputPlayerNation: string;
    inputPlayerClub: string;
    inputPlayerImageUrl: string;
    errorMessage: string;
    inputPlayer: IPlayer ={
        'id': null,
        "playerName": "",
        "playerPosition": "",
        "playerAge": null,
        "playerNation": "",
        "playerClub": "",
        "playerImage": ""
    };

    constructor(private _playerService: PlayerService, private _router : Router) {}

    ngOnInit() {
        this._playerService.getPlayers()
        .subscribe(players => this.players = players,
        error => this.errorMessage = <any>error)
    }
    onTeamView(): void {
        this._router.navigate(['/teambuilder']);
    }
    onAdd(playerName: string, playerPosition: string, playerAge: number, playerNation: string, playerClub: string, playerID: number): void {
        Object.defineProperties(this.inputPlayer, {
            'playerName': {value: playerName},
            'playerPosition':{value: playerPosition},
            'playerAge' : {value: playerAge},
            'playerNation' : {value : playerNation},
            'playerClub' : {value : playerClub}
        });
    this._playerService.addPlayer(this.inputPlayer).subscribe(
        data => {
          // refresh the list
          this._playerService.getPlayers();
          return true;
        },
        error => {
          console.error("error adding user player");
          return Observable.throw(error);
        }
     );
    this.players.push(this.inputPlayer);
    }
    onGetThisPlayer(player: IPlayer, index: number){
        this.players.splice(index, 1);
        console.log(player);
        this._playerService.removePlayer(player.id).subscribe(
            data => {
              // refresh the list
              this._playerService.getPlayers();
              return true;
            },
            error => {
              console.error("Error  removing player from the list!");
              return Observable.throw(error);
            }
         );
        
        this._playerService.addSelectedPlayer(player).subscribe(
            data => {
              // refresh the list
              this._playerService.getSelectedPlayers();
              return true;
            },
            error => {
                console.error("Error adding player to the list");
                return Observable.throw(error);
              }
         );

       
       /* this._playerService.updatePlayers(this.players).subscribe(
            data => {
                // refresh the list
                this._playerService.getPlayers();
                return true;
              },
              error => {
                  console.error("Error saving avaiblePlayers!");
                  return Observable.throw(error);
                }
        );
        */
    }
}