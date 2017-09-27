import { Injectable } from '@angular/core';
import { IPlayer } from './player';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable ()

export class PlayerService {

    private _availablePlayersUrl = 'api/players';
    private _selectedPlayersUrl = 'api/selectedPlayers';
    constructor(private _http: Http) {}

    getSelectedPlayers(): Observable <IPlayer[]> {
      const url= `${this._selectedPlayersUrl}`;
      return this._http.get(url)
      .map(this.extractData)
      //.do(data => console.log('getSelectedPlayers ' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    getPlayers(): Observable <IPlayer[]> {
      const url= `${this._availablePlayersUrl}`;
      return this._http.get(url)
      .map(this.extractData)
      //.do(data => console.log('getAvaiblePlayers: ' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    removeSelectedPlayer(player_id: number) {
      return this._http.delete('api/selectedPlayers/' + player_id);
    }

    removePlayer(player_id: number) {
      return this._http.delete('api/players/'+ player_id);
    }

    /*updateSelectedPlayers(selectedPlayers: IPlayer[]): Observable <IPlayer[]> {
      const url= `${this._selectedPlayersUrl}`;
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(selectedPlayers);
      
      return this._http.put(url, selectedPlayers, options)
      .map((res: Response) => res.json())
      .do(data => console.log('updateSelectedPlayers ' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    updatePlayers(players: IPlayer[]): Observable <IPlayer[]> {
      const url= `${this._availablePlayersUrl}`;
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(players);

      return this._http.put(url, players, options).map((res: Response) => res.json())
      .do(data => console.log('updatePlayers ' + JSON.stringify(data)))
      .catch(this.handleError);
    }
*/
    addPlayer(player : IPlayer): Observable <IPlayer> {
      const url= `${this._availablePlayersUrl}`;
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(player);

      return this._http.post(url, body, options).map((res: Response) => res.json())
      //.do(data => console.log('currentAvailablePlayers : ' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    addSelectedPlayer(player : IPlayer): Observable <IPlayer> {
      const url= `${this._selectedPlayersUrl}`;
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(player);

      return this._http.post(url, body, options).map((res: Response) => res.json())
      //.do(data => console.log('currentSelectedPlayers after remove : ' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    private extractData(response: Response) {
      let body = response.json();
      return body.data || {};
    }

}