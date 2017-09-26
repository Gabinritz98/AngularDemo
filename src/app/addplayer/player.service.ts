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

    private _avaiblePlayersUrl = 'api/players';
    private _selectedPlayersUrl = 'api/selectedPlayers';
    constructor(private _http: Http) {}

    getSelectedPlayers(): Observable <IPlayer[]> {
      const url= `${this._selectedPlayersUrl}`;
      return this._http.get(url)
      .map(this.extractData)
      .do(data => console.log('getSelectedPlayers ' + JSON.stringify(data)))
      .catch(this.handleError);
    }

    getPlayers(): Observable <IPlayer[]> {
      const url= `${this._avaiblePlayersUrl}`;
      return this._http.get(url)
      .map(this.extractData)
      .do(data => console.log('getAvaiblePlayers: ' + JSON.stringify(data)))
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