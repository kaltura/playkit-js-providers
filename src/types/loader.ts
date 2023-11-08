import RequestBuilder from '../../src/util/request-builder';

export interface ILoader {
  requests: Array<RequestBuilder>;
  response: any;
  isValid(): boolean;
}
