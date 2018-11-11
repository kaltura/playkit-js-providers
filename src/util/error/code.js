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
   * A network request was made with a data URI using an unknown encoding.
   */
  UNKNOWN_DATA_URI_ENCODING: 1005,

  /**
   * A request filter threw an error.
   */
  REQUEST_FILTER_ERROR: 1006,

  /**
   * A response filter threw an error.
   */
  RESPONSE_FILTER_ERROR: 1007,
  /**
   * The server responded with an error in the response
   */
  ERROR_FROM_SERVER: 1008
};

export {Code};
export type {CodeType};
