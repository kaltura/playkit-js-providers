# PlayKit JS Providers - OTT and OVP media providers plugins for the [PlayKit JS Player]

[![Build Status](https://travis-ci.com/kaltura/playkit-js-providers.svg?token=s2ZQw18ukx9Q6ePzDX3F&branch=master)](https://travis-ci.com/kaltura/playkit-js-providers)

PlayKit JS Providers plugin helps integrate Kaltura OVP and OTT BE data APIs with the [PlayKit JS Player].
 
PlayKit JS Providers is written in [ECMAScript6], statically analysed using [Flow] and transpiled in ECMAScript5 using [Babel].

[Flow]: https://flow.org/
[ECMAScript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[Babel]: https://babeljs.io
[Playkit JS Player]: https://github.com/kaltura/playkit-js

## Getting Started

### Installing

First, clone and run [yarn] to install dependencies:

[yarn]: https://yarnpkg.com/lang/en/

```
git clone https://github.com/kaltura/playkit-js-providers.git
cd playkit-js-providers
yarn install
```

### Building

Then, build the player

```javascript
yarn run build
```

### Embed the library in your test page

Finally, add the bundle as a script tag in your page, and initialize the provider

```html
<script type="text/javascript" src="/PATH/TO/FILE/ovpProvider.js"></script>
<div id="videoContainer" style="height:360px;width:640px">
<script type="text/javascript">
var partnerId = "YOUR_PARTNER_ID";
var entryID = "YOUR_ENTRY_ID";
var provider = new OvpProvider(partnerId);
provider.getConfig(entryID).then(data => {
  console.log(data);
  //Manipulate data
});
</script>
```

## Configuration

## Running the tests

Tests can be run localy via [Karma], which will run on Chrome, Firefox and Safari

[Karma]: https://karma-runner.github.io/1.0/index.html
```
yarn run test
```

You can test individual browsers:
```
yarn run test:chrome
yarn run test:firefox
yarn run test:safari
```

### And coding style tests

We use ESLint [recommended set](http://eslint.org/docs/rules/) with some additions for enforcing [Flow] types and other rules.

See [ESLint config](.eslintrc.json) for full configuration.

We also use [.editorconfig](.editorconfig) to maintain consistent coding styles and settings, please make sure you comply with the styling.


## Compatibility

TBD

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/kaltura/playkit-js-providers/tags). 

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details
