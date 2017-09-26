import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IPlayer } from '../addplayer/player';

export class PlayerData implements InMemoryDbService {
    
    createDb() {

        let selectedPlayers: IPlayer[] = [{
            'id': 1,
            "playerName": "Jean claude",
            "playerPosition": "",
            "playerAge": 23,
            "playerNation": "France",
            "playerClub": "Barcelona",
            "playerImage": ""
        }];

        let players: IPlayer[] =  [
            {
                "id": 1,
                "playerName": "Lloris",
                "playerPosition": "Goalkeeper",
                "playerAge": 29,
                "playerNation": "France",
                "playerClub": "Spurs",
                "playerImage": ""
            },
            {
                'id': 2,
                "playerName": "De Gea",
                "playerPosition": "Goalkeeper",
                "playerAge": 26,
                "playerNation": "Spain",
                "playerClub": "Man U",
                "playerImage": ""
            },
            {
                'id': 3,
                "playerName": "Buffon",
                "playerPosition": "Goalkeeper",
                "playerAge": 37,
                "playerNation": "Italy",
                "playerClub": "Juve",
                "playerImage": ""
            },
            {
                'id': 4,
                "playerName": "Alisson",
                "playerPosition": "Goalkeeper",
                "playerAge": 25,
                "playerNation": "Brazil",
                "playerClub": "Roma",
                "playerImage": ""
            },
            {
                'id': 5,
                "playerName": "Sidibe",
                "playerPosition": "Defender",
                "playerAge": 24,
                "playerNation": "France",
                "playerClub": "Monaco",
                "playerImage": ""
            },
            {
                'id': 6,
                "playerName": "Carvajal",
                "playerPosition": "Defender",
                "playerAge": 27,
                "playerNation": "Spain",
                "playerClub": "R Madrid",
                "playerImage": ""
            },
            {
                'id': 7,
                "playerName": "Darmian",
                "playerPosition": "Defender",
                "playerAge": 24,
                "playerNation": "Italy",
                "playerClub": "Man U",
                "playerImage": ""
            },
            {
                'id': 8,
                "playerName": "Dani Alves",
                "playerPosition": "Defender",
                "playerAge": 31,
                "playerNation": "Brazil",
                "playerClub": "PSG",
                "playerImage": ""
            },
            {
                'id': 9,
                "playerName": "Umtiti",
                "playerPosition": "Defender",
                "playerAge": 23,
                "playerNation": "France",
                "playerClub": "Barcelona",
                "playerImage": ""
            },
            {
                'id': 10,
                "playerName": "Ramos",
                "playerPosition": "Defender",
                "playerAge": 30,
                "playerNation": "Spain",
                "playerClub": "R Madrid",
                "playerImage": ""
            },
            {
                'id': 11,
                "playerName": "Bonucci",
                "playerPosition": "Defender",
                "playerAge": 30,
                "playerNation": "Italy",
                "playerClub": "AC Milan",
                "playerImage": ""
            },
            {
                'id': 12,
                "playerName": "Silva",
                "playerPosition": "Defender",
                "playerAge": 30,
                "playerNation": "Brazil",
                "playerClub": "PSG",
                "playerImage": ""
            },
            {
                'id': 13,
                "playerName": "Mendy",
                "playerPosition": "Defender",
                "playerAge": 23,
                "playerNation": "France",
                "playerClub": "Man C",
                "playerImage": ""
            },
            {
                'id': 14,
                "playerName": "Alba",
                "playerPosition": "Defender",
                "playerAge": 25,
                "playerNation": "Spain",
                "playerClub": "Barcelona",
                "playerImage": ""
            },
            {
                'id': 15,
                "playerName": "De Siglio",
                "playerPosition": "Defender",
                "playerAge": 24,
                "playerNation": "Italy",
                "playerClub": "Juve",
                "playerImage":""
            },
            {
                'id': 16,
                "playerName": "Marcelo",
                "playerPosition": "Defender",
                "playerAge": 27,
                "playerNation": "Brazil",
                "playerClub": "R Madrid",
                "playerImage": ""
            },
            {
                'id': 17,
                "playerName": "Unkown",
                "playerPosition": "Midfielder",
                "playerAge": null,
                "playerNation": "Unknown",
                "playerClub": "Unknown",
                "playerImage": ""
            },
            {
                'id': 18,
                "playerName": "Unkown",
                "playerPosition": "Midfielder",
                "playerAge": null,
                "playerNation": "Unknown",
                "playerClub": "Unknown",
                "playerImage": ""
            },
            {
                'id': 19,
                "playerName": "Unkown",
                "playerPosition": "Midfielder",
                "playerAge": null,
                "playerNation": "Unknown",
                "playerClub": "Unknown",
                "playerImage": ""
            },
            {
                'id': 20,
                "playerName": "Unkown",
                "playerPosition": "Midfielder",
                "playerAge": null,
                "playerNation": "Unknown",
                "playerClub": "Unknown",
                "playerImage": ""
            },
            {
                'id': 21,
                "playerName": "Unkown",
                "playerPosition": "Striker",
                "playerAge": null,
                "playerNation": "Unknown",
                "playerClub": "Unknown",
                "playerImage": ""
            },
            {
                'id': 22,
                "playerName": "Unkown",
                "playerPosition": "Striker",
                "playerAge": null,
                "playerNation": "Unknown",
                "playerClub": "Unknown",
                "playerImage": ""
            },
            {
                'id': 23,
                "playerName": "Unkown",
                "playerPosition": "Striker",
                "playerAge": null,
                "playerNation": "Unknown",
                "playerClub": "Unknown",
                "playerImage": ""
            },
            {
                'id': 24,
                "playerName": "Unkown",
                "playerPosition": "Striker",
                "playerAge": null,
                "playerNation": "Unknown",
                "playerClub": "Unknown",
                "playerImage": ""
            },
            {
                'id': 25,
                "playerName": "Unkown",
                "playerPosition": "Striker",
                "playerAge": null,
                "playerNation": "Unknown",
                "playerClub": "Unknown",
                "playerImage": ""
            }
        ];
        return {players, selectedPlayers};
    }
}