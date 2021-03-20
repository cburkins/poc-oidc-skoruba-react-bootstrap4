export class Constants {
  public static stsAuthority = 'https://login.microsoftonline.com/3ac94b33-9135-4821-9502-eafda6592a35/v2.0';
  public static clientId = '9d8dbaf6-8a28-499d-af06-eee7b517938d';
  public static clientRoot = 'http://localhost:3000/';
  public static clientScope = 'openid profile email';

  public static apiRoot = 'https://demo.identityserver.io/api/';
}

// REACT_APP_AUTH_URL=https://login.microsoftonline.com/3ac94b33-9135-4821-9502-eafda6592a35/v2.0
// REACT_APP_IDENTITY_CLIENT_ID=9d8dbaf6-8a28-499d-af06-eee7b517938d
// REACT_APP_REDIRECT_URL=http://localhost:3000/signin-oidc