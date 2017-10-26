import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class GoogleAuthService implements OnInit {
    // GoogleAuth: any;
    isAuthorized: boolean;
    currentApiRequest: any[];

    // Google API Data
    API_KEY = 'AIzaSyAM8hl0TDbjdvhfCbxssqUZLBhdYW61HC8';
    CLIENT_ID = '723346320254-ih4po07mrd5qluliu9a11r9kv014tqjo.apps.googleusercontent.com';
    SCOPE_URL = 'https://www.googleapis.com/auth/books';
    DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/books/v1/rest';

    handleClientLoad() {
        // Load the API's client and auth2 modules.
        // Call the initClient function after the modules load.
        gapi.load('client:auth2', this.initClient);
    }

    initClient() {
        gapi.client.init({
            'apiKey': 'AIzaSyAM8hl0TDbjdvhfCbxssqUZLBhdYW61HC8',
            'clientId': '723346320254-ih4po07mrd5qluliu9a11r9kv014tqjo.apps.googleusercontent.com',
            'scope': 'https://www.googleapis.com/auth/books',
            'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/books/v1/rest']
        }).then(function () {
            // this.GoogleAuth = gapi.auth2.getAuthInstance();
            console.log(gapi.auth2.getAuthInstance().isSignedIn.get());

            gapi.auth2.getAuthInstance().isSignedIn.get();

            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus.bind(this));
        });
    }

    sendAuthorizedApiRequest(requestDetails) {
        this.currentApiRequest = requestDetails;
        if (this.isAuthorized) {
            // Make API request
            // gapi.client.request(requestDetails)

            // Reset currentApiRequest variable.
        } else {
            gapi.auth2.getAuthInstance().signIn();
        }
    }

    getSignInStatus(): boolean {
        const googleUser = gapi.auth2.getAuthInstance();
        return googleUser.isSignedIn.get();
    }

    updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
            this.isAuthorized = true;
            if (this.currentApiRequest) {
                this.sendAuthorizedApiRequest(this.currentApiRequest);
            }
        } else {
            this.isAuthorized = false;
        }
    }

    handleAuthClick() {
        // console.log('inside handleAuthClick method----'+ this.GoogleAuth.currentUser.get());
        if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
            // User is authorized and has clicked 'Sign out' button.
            gapi.auth2.getAuthInstance().signOut();
        } else {
            // User is not signed in. Start Google auth flow.
            gapi.auth2.getAuthInstance().signIn();
        }
    }

    revokeAccess() {
        gapi.auth2.getAuthInstance().disconnect();
    }

    ngOnInit() {
    }
}
