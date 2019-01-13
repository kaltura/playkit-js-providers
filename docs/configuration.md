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
  logLevel: string, // optional
  ks: string, // optional
  uiConfId: number, // optional
  env: ProviderEnvConfigObject, // optional
  networkRetryParameters: ProviderNetworkRetryParameters, // optional
  filterOptions: ProviderFilterOptionsObject // optional
}
```

##

> ### config.logLevel
>
> ##### Type: `string`
>
> ##### Default: `"ERROR"`
>
> ##### Description: Defines the provider log level.
>
> Possible values: `"DEBUG", "INFO", "TIME", "WARN", "ERROR", "OFF"`

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
>  cdnUrl: string
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
>  cdnUrl: "//cdnapisec.kaltura.com"
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

##

> ### config.networkRetryParameters
>
> ##### Type: `ProviderNetworkRetryParameters`
>
> ```js
> {
>  timeout?: number,
>  maxAttempts?: number
> }
> ```
>
> > ### config.networkRetryParameters.timeout
> >
> > ##### Type: `number`
> >
> > ##### Default: `0` - this means it will use the browser default timeout.
> >
> > ##### Description: Defines the timeout for the provider requests in milliseconds.
>
> ##
>
> > ### config.networkRetryParameters.maxAttempts
> >
> > ##### Type: `number`
> >
> > ##### Default: `4`
> >
> > ##### Description: Defines the number of attemps the providers should try make a request before it fails.

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
> ##### Description: Defines whether after a live stream ends there should be a redirect to the VOD entry or not.
