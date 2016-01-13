
moneypenny-client provides the ability to autenticate users for an express js server using the moneypenny server.

#Example

```
var express = require('express');
var app = express();

var AuthClient = require('moneypenny-client');
var options = {
  jwtSecret: 'top_secret_shared_secret',
  providerHost: 'moneypenny-server-address',
  serverHost: 'localhost',
  oAuthClientSecret: 'another_top_secret_secret',
  oAuthClientID: 'test_server'
}
var authClient = new AuthClient(options);
authClient.initialize(app);
app.use(authClient.checkAuthenticated)
```

#Options
###JWT
`jwtSecret` __required__ secret used to decode and encode JWT.

###Authentication Server Details
`providerHost` __required__ web accessable host name for the location of the authentication server.

`providerPort` _default:443_ web accessable port for the location of the authentication server.

`proviaderName` _default:moneypenny-server_ name given to the oAuth passport stratergy

###Service external details
`serverHost` __required__ web accessable hostname of the service running the moneypennny-client

`serverPort` _default:443_ web accessable port of the service running the moneypennny-client

##oAuth Details
`oAuthClientSecret` __required__ shared secret setup in the authentication service for the service

`oAuthClientID` __required__ client id that corresponds to this service on the authentication service

`authorizationURI` _default:/oauth2/authorization_ url on the authentication server where the authentication endpoint can be found.

`tokenURI` _default:/oauth2/token_ uri that this server will use to get the token.

`callbackURI` _default:/auth/provider/callback_ uri that will be added to this server using the `initialize()` method that will be used for the oAuth2 callback

`loginUri` _default:/login_ uri that is used to login to the service, this will be added to this server using the `initalize()` method.

