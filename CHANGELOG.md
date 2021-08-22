# Changelog

## [v0.4.0](https://github.com/sindrekjr/lastfm/tree/v0.4.0)

#### 2021-08-23
- 🎉 Added `ChartService` and completed all methods.

## [v0.3.0](https://github.com/sindrekjr/lastfm/tree/v0.3.0)

#### 2021-08-22
- 💥 Renamed `sharedSecret` to `secret` in options object injected when instantiating `ApiClient` or `ApiProxy`.
- 🎉 Completed all methods of `AlbumService`.
- 🎉 Added `AuthService` and created methods `getToken` `getSession`.
- 🎉 Added `ArtistService` and completed all methods.
- 🎉 `ApiProxy` now supports method signing and POST requests.
- 🔧 New abstract class `BaseService` as base for all services.
- 🔧 Simplified a lot of typings with less hierarchy; expanded some others. Accuracy should generally be much better.

## [v0.2.0](https://github.com/sindrekjr/lastfm/tree/v0.2.0)

#### 2021-08-21
- 💥 `ApiClient` now expects an object `ApiClientOptions` containing `apiKey`, plus optional fields.
- 🎉 `ApiClientOptions` includes optional fields for injecting predefined services and/or proxy.
- 🎉 Added `getTags` and `getTopTags` to `AlbumService`.
- 🎉 Exported classes `AlbumService` `ApiProxy` and interfaces `Artist` `Image` `Tag` `Track`.
- 🔧 `ApiProxy` is no longer an abstract class and is injected into every service as a dependency.

## [v0.1.0](https://github.com/sindrekjr/lastfm/tree/v0.1.0) - Initial
#### 2021-08-20
- 🎉 Implemented `ApiProxy` and `AlbumService` with `getInfo`.
- 🎉 Expose `ApiClient` with accessible `AlbumService`.
