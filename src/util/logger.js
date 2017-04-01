//@flow
import * as JsLogger from 'js-logger';

export default class Logger {
  static get(name?: string) {
    JsLogger.setLevel(JsLogger.DEBUG);
    if (!name) {
      return JsLogger;
    }
    return JsLogger.get(name);
  }
}


