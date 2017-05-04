//@flow
import RequestBuilder from '../../src/k-provider/request-builder'

declare interface ILoader {
  static name: string;
  requests: Array<RequestBuilder>;
  response: any;
  isValid(): boolean;
}
