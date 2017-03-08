// @flow

import {Scheme} from '../kProvider/enums';

export default class Drm {

  licenseUrl: string;
  scheme: Scheme;

  constructor(licenseUrl: string, scheme: Scheme) {

    this.licenseUrl = licenseUrl;
    this.scheme = scheme;

  }

}
