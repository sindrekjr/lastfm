# LastFm

Fully typed last.fm library, primarily made for interacting with their API in a reliable and informative way.

- [Installation](#installation)
- [Usage](#usage)
  - [ApiClient](#apiclient)
  - [Services](#services)
  - [Authentication](#authentication)
- [Features](#features)
- [Docs](#docs)

## Installation
### Source package registry
Add an `.npmrc` to your project and reference the GitHub Package Registry as the source for packages scoped under `@sindrekjr`.
```properties
@sindrekjr:registry=https://npm.pkg.github.com
```
This step may be redundant if the GitHub Package Registry is already sourced in your npm configuration somehow, although it's probably a good idea for your project to contain all necessary source references.

### Install
Run the normal npm install command.
```bash
$ npm i @sindrekjr/lastfm
```

## Usage
### ApiClient
The `ApiClient` is the standard entry point and wraps the entire Last.fm API through underlying services. You can import the client like so.
```ts
const { ApiClient } = require('@sindrekjr/lastfm'); // CommonJS
import { ApiClient } from '@sindrekjr/lastfm'; // ES Modules
```

Instantiate the client with an object that contains a valid **API key**. You must sign up for API access with Last.fm to receive this key, as well as a **shared secret**. Note that supplying only the API key means having read only access.
```ts
const client = new ApiClient({
  apiKey: 's0me5up3rSec|2e7V31ue', // required
  secret: 'someSharedSecret', // optional; required for add/remove methods
  sessionKey: 'someSessionKey', // optional; required for add/remove methods
  userAgent: 'my appropriate user agent', // defaults to 'git@github.com:sindrekjr/lastfm'
});
```

For the client to support POST requests, your **secret** and a **session key** must be provided as well as the API key. To obtain a session key, see the next section about [Authentication](#authentication).

### Services
The `ApiClient` exposes the following services for each group of Last.fm API methods.
- AlbumService
- ArtistService
- AuthService
- ChartService
- GeoService
- LibraryService
- TagService
- TrackService
- UserService

Each service is accessible directly as fields using only the unique part of their name. This also reflects the structure of the API. Examples below.

```ts
client.album.getInfo({ artist: 'Radiohead', album: 'The Bends' });
client.artist.getTopAlbums({ artist: 'The Beatles' });
client.track.getSimilar({ artist: 'Vanilla Ice', track: 'Ice Ice Baby' });
```

### Authentication
Authenticating and retrieving a session key is made easy via the methods offered by the client, but it is not fully automated.
1. Instantiate the client with your API key and secret.
2. Call `client.auth.getToken()` to receive a temporary auth token.
3. Open `http://www.last.fm/api/auth/?api_key=<API key>&token=<TOKEN>` in your browser, which will allow you to log in and authorize your new token's access to your account.
4. Call `client.auth.getSession({ token })` with your newly authorized access token to receive a permanent session key.

Make sure the session key is stored securely. You can revoke the application's access to your account via your settings on Last.fm at any time. For more information, see the referenced documentation below concerning the Last.fm API and the Auth Spec.

## Features
- Fully typed with [TypeScript](https://www.typescriptlang.org/).
- Exposes underlying structures for adaptability and customisation.
- Low-level abstractions that reflect the Last.fm API.
- Object-oriented.

## Docs
- [API Docs | Last.fm](https://www.last.fm/api)
- [API Docs | Last.fm | Auth Spec](https://www.last.fm/api/authentication)
- [TypeScript](https://www.typescriptlang.org/)
