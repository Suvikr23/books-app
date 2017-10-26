import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

import { GoogleAuthService } from '../_shared/google-oauth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [GoogleAuthService]
})
export class LoginComponent implements OnInit {
    isSignedIn: boolean;
    constructor(private googleService: GoogleAuthService) {
    }

    checkGoogleAuth() {
        this.googleService.handleAuthClick();
    }

    googleSignOut() {
        this.googleService.revokeAccess();
        this.isSignedIn = false;
    }

    ngOnInit() {
        debugger;
        this.googleService.handleClientLoad();
        this.isSignedIn = this.googleService.getSignInStatus();
    }
}
