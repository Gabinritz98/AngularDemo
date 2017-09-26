import { Component } from "@angular/core";
import { ActivatedRoute, Router} from '@angular/router';
import { IPlayer } from "../addplayer/player";
import { PlayerService } from '../addplayer/player.service';
import { Observable } from 'rxjs/Rx';
 
@Component ({
    templateUrl: './teambuilder.component.html',
    styleUrls: ['./teambuilder.component.css']
})

export class TeamBuilderComponent {
    counter: number = 0;
    selectedPlayers: IPlayer[];
    errorMessage: string;

    constructor(private _router: Router, private _playerService: PlayerService) {}

    ngOnInit() {
        this._playerService.getSelectedPlayers()
        .subscribe(selectedPlayers => this.selectedPlayers = selectedPlayers,
        error => this.errorMessage = <any>error)
            }

    onAddPlayer(): void {
        this._router.navigate(['/addplayer']);
    }
    onRemoveThisPlayer(player: IPlayer, index: number): void {
        this.selectedPlayers.splice(index, 1);

        this._playerService.removeSelectedPlayer(player.id)
        .subscribe(
            data => {
              // refresh the list
              this._playerService.getSelectedPlayers();
              return true;
            },
            error => {
              console.error("Error saving food!");
              return Observable.throw(error);
            }
         );

        /*this._playerService.updateSelectedPlayers(this.selectedPlayers).subscribe(
            data => {
                // refresh the list
                this._playerService.getSelectedPlayers();
                return true;
              },
              error => {
                  console.error("Error saving selectedPlayers!");
                  return Observable.throw(error);
                }
        );
*/
        this._playerService.addPlayer(player).subscribe(
            data => {
              // refresh the list
              this._playerService.getPlayers();
              return true;
            },
            error => {
                console.error("Error saving players!");
                return Observable.throw(error);
              }
         );
    }
}