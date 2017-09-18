import { Component } from "@angular/core";
import { ActivatedRoute, Router} from '@angular/router';

@Component ({
    templateUrl: './teambuilder.component.html',
    styleUrls: ['./teambuilder.component.css']
})

export class TeamBuilderComponent {
    counter: number = 0;

    constructor(private _router: Router) {

    }
    onAddPlayer(): void {
        this._router.navigate(['/addplayer']);
    }
}