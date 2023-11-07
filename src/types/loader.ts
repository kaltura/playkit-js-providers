//@flow
import RequestBuilder from '../../src/util/request-builder';

declare interface ILoader {
  requests: Array<RequestBuilder>;
  response: any;
  isValid(): boolean;
}
