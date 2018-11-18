//@flow

type CodeType = {[code: string]: number};

const Code: CodeType = {
  /**
   * A network request was made using an unsupported URI scheme.
   */
  UNSUPPORTED_SCHEME: 1000,

  /**
   * An HTTP network request returned an HTTP status that indicated a failure.
   */
  BAD_HTTP_STATUS: 1001,

  /**
   * An HTTP network request failed with an error, but not from the server.
   */
  HTTP_ERROR: 1002,

  /**
   * A network request timed out.
   */
  TIMEOUT: 1003,

  /**
   * A network request was made with a malformed data URI.
   */
  MALFORMED_DATA_URI: 1004,

  /**
   * The server responsded with 2xx response, but it couldn't be parsed
   */
  BAD_SERVER_RESPONSE: 1005,

  /**
   * The server response had a valid structure but contained an error from the API
   */
  MULTIREQUEST_API_ERROR: 1006,

  /**
   * The server response had a valid structure and valid API result, but it did not match the request
   */
  API_RESPONSE_MISMATCH: 1007
};

export {Code};
export type {CodeType};
