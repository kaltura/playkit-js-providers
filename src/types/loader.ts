import RequestBuilder from '../util/request-builder';

export interface ILoader {
  requests: Array<RequestBuilder>;
  response: any;
  isValid(): boolean;
}
