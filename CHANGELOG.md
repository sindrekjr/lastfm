# Changelog

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
