//@flow
import RequestBuilder from '../../kProvider/requestBuilder'

declare interface ILoader {
  static name: string;
  requests: Array<RequestBuilder>;
  response: any;
  isValid(): boolean;
}
