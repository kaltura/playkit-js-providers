## Configuration
Configuration parameters could be provided upon instantiation of the provider instance.
##### OVP
```js
var config = {
  // Configuration here
};
var provider = new playkit.providers.ovp.Provider(config);
```
##### OTT
```js
var config = {
  // Configuration here
};
var provider = new playkit.providers.ott.Provider(config);
```

#### Configuration Structure
```js
{
  partnerId: number,
  logLevel: string, // optional
  ks: string, // optional
  uiConfId: number, // optional
  env: ProviderEnvConfigObject // optional
}
```
## 
>### config.logLevel
>##### Type: `string`
>##### Default: `"ERROR"`
>##### Description: Defines the provider log level.
>Possible values: `"DEBUG", "INFO", "TIME", "WARN", "ERROR", "OFF"`
## 
>### config.partnerId
>##### Type: `number`
>##### Default: `-`
>##### Description: Defines the customer's partner id.
## 
>### config.ks
>##### Type: `string`
>##### Default: `''`
>##### Description: Defines the customer's unique ks.
## 
>### config.uiConfId
>##### Type: `number`
>##### Default: `-`
>##### Description: Defines the customer's ui config id.
## 
>### config.env
>##### Type: `ProviderEnvConfigObject`
>```js
>{
>  serviceUrl: string,
>  cdnUrl: string
>}
>>```
>##### Default:
> **OVP**
>```js
>{
>  serviceUrl: "//www.kaltura.com/api_v3",
>  cdnUrl: "//cdnapisec.kaltura.com"
>}
>```
> **OTT**
>```js
>{
>  serviceUrl: "//api-preprod.ott.kaltura.com/v4_6/api_v3",
>  cdnUrl: "//api-preprod.ott.kaltura.com/v4_7"
>}
>```
>##### Description: Defines the server environment to run against.
