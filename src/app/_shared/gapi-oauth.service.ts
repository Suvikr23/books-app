import { Injectable } from '@angular/core';

@Injectable()
export class GapiOauthService {
  api_key = 'AIzaSyAM8hl0TDbjdvhfCbxssqUZLBhdYW61HC8'
  client_id = '723346320254-ih4po07mrd5qluliu9a11r9kv014tqjo.apps.googleusercontent.com'

  constructor() { }

  handleClient() {

  }

  initClient() {
    gapi.client.init({
      'apiKey': this.api_key,
      'clientId': this.client_id,
      'scope': 'https://www.googleapis.com/auth/books',
      'discoveryDocs': ['']
    }).then(function () {
      //gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus.bind(this));
    })
  }
}
