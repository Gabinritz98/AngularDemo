import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component ({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
    description: string = 'Welcome to the brand new TeamBuilder, \nright here u will be able to choose the players you want and to make a team composition with them';
    pageTitle: string = 'TeamBuilder WebSite';

    constructor(private _router : Router) {
        
    }

    onBack(): void {
        this._router.navigate(['/teambuilder']);
    }
}