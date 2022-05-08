## Configuration

Configuration parameters are provided upon instantiation of the provider instance.

#### OVP

```js
var config = {
  // Configuration here
};
var provider = new playkit.providers.ovp.Provider(config);
```

#### Cloud TV

```js
var config = {
  // Configuration here
};
var provider = new playkit.providers.ott.Provider(config);
```

### Configuration Structure

```js
{
  partnerId: number,
  logger?: LoggerType, // optional
  ks: string, // optional
  uiConfId: number, // optional
  env: ProviderEnvConfigObject, // optional
  networkRetryParameters: ProviderNetworkRetryParameters, // optional
  filterOptions: ProviderFilterOptionsObject, // optional
  ignoreServerConfig: boolean // optional,
  loadThumbnailWithKs: boolean // optional
}
```

##

> ### config.log
>
> ##### Type: `Object`
>
> ### config.log.level
>
> ##### Type: `string`
>
> ##### Default: `"ERROR"`
>
> ##### Description: Defines the provider log level.
>
> Possible values: `"DEBUG", "INFO", "TIME", "WARN", "ERROR", "OFF"`
>
> ### config.log.handler
>
> ##### Type: `function`
>
> ##### Description: Defines the log handler function by default will write to console.

##

> ### config.partnerId
>
> ##### Type: `number`
>
> ##### Default: `-`
>
> ##### Description: Defines the customer's partner ID.

##

> ### config.ks
>
> ##### Type: `string`
>
> ##### Default: `''`
>
> ##### Description: Defines the customer's unique KS.

##

> ### config.uiConfId
>
> ##### Type: `number`
>
> ##### Default: `-`
>
> ##### Description: Defines the customer's UI config ID.

##

> ### config.env
>
> ##### Type: `ProviderEnvConfigObject`
>
> ```js
> {
>  serviceUrl: string,
>  cdnUrl: string,
>  useApiCaptions: boolean
> }
> ```
>
> ##### Default:
>
> **OVP**
>
> ```js
> {
>  serviceUrl: "//www.kaltura.com/api_v3",
>  cdnUrl: "//cdnapisec.kaltura.com",
>  useApiCaptions: true
> }
> ```
>
> **Cloud TV**
>
> ```js
> {
>  serviceUrl: "//api-preprod.ott.kaltura.com/v4_6/api_v3",
>  cdnUrl: "//api-preprod.ott.kaltura.com/v4_7"
> }
> ```
>
> ##### Description: Defines the server environment to run against.
>
> > ### config.env.useApiCaptions
> >
> > ##### Type: `boolean`
> >
> > ##### Default: true
> >
> > ##### Description: Show captions on platforms that don't support inband captions (for example: playing using Flash). This flag is for the OVP provider, and can be turned off by setting its value to `false`.

##

> ### config.networkRetryParameters
>
> ##### Type: `ProviderNetworkRetryParameters`
>
> ```js
> {
>  async?: boolean,
>  timeout?: number,
>  maxAttempts?: number
> }
> ```
>
> > ### config.networkRetryParameters.async
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `true`
> >
> > ##### Description: Defines whether or not to perform the request operation asynchronously.
>
> ##
>
> > ### config.networkRetryParameters.timeout
> >
> > ##### Type: `number`
> >
> > ##### Default: `0` - This means it will use the browser default timeout.
> >
> > ##### Description: Defines the timeout for provider requests in milliseconds.
>
> ##
>
> > ### config.networkRetryParameters.maxAttempts
> >
> > ##### Type: `number`
> >
> > ##### Default: `4`
> >
> > ##### Description: Defines the number of attemps the provider should try make a request before the request fails.

> ### config.filterOptions
>
> ##### Type: `ProviderFilterOptionsObject`
>
> ```js
> {
>   redirectFromEntryId: boolean;
> }
> ```
>
> ##### Default:
>
> ```js
> {
>   redirectFromEntryId: true;
> }
> ```
>
> ##### Description: Defines whether after a livestream ends there should be a redirect to the VOD entry or not.

> ##
>
> ### config.ignoreServerConfig
>
> ##### Type: `boolean`
>
>
> ##### Description: Instructs the player to ignore the server configuration.

> ##
>
> ### config.loadThumbnailWithKs
>
> ##### Type: `boolean`
>
> ##### Default: `false`
>
> ##### Description: Defines whether to add KS to sprite and poster requests or not.>
