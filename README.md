# LastFm

Fully typed last.fm library, primarily made for interacting with their API in a reliable and informative way.

- [Installation](#installation)
- [Usage](#usage)
  - [AlbumService](#albumservice)
- [Documentation](#documentation)

## Installation
```
> npm i @sindrekjr/lastfm
```

The GitHub Package Registry `https://npm.pkg.github.com` must be referenced in your npm configuration.

## Usage

Import using one of these two lines, depending on your configuration.
```ts
const { ApiClient } = require('@sindrekjr/lastfm');
import { ApiClient } from '@sindrekjr/lastfm';
```

Instantiate the client with an object that contains a valid API key. You must sign up for API access with Last.fm to receive this key.
```ts
// The minimal requirement:
const client = new ApiClient({ apiKey: 's0me5up3rSec|2e7V31ue' });

// Alternatively, using more of the available options:
const client = new ApiClient({
  apiKey: 's0me5up3rSec|2e7V31ue',
  sharedSecret: 'someSharedSecret', // received from Last.fm; may be required for some functions
  sessionKey: 'someSessionKey', // optional
  format: 'json', // defaults to 'json'
  userAgent: 'my appropriate user agent', // defaults to 'git@github.com:sindrekjr/lastfm'
});
```

### AlbumService

When the client is instantiated, the album service will be available directly on the client as `album`.

#### `album.getInfo`
Retrieves all the information held by Last.fm about a particular album.
```ts
const theBends = client.album.getInfo({ album: 'The Bends', artist: 'Radiohead' });
```

#### `album.getTags`
Retrieves all tags that have been set on a particular album by the given user.
```ts
const myTheBendsTags = client.album.getTags({ album: 'The Bends', artist: 'Radiohead', user: 'someUsername' });
```

#### `album.getTopTags`
Retrieves the most popular tags on the particular album.
```ts
const theBendsTopTags = client.album.getTopTags({ album: 'The Bends', artist: 'Radiohead', user: 'someUsername' });
```

## Documentation

- [API Docs | Last.fm](https://www.last.fm/api)
- [TypeScript](https://www.typescriptlang.org/)
