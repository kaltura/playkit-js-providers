declare type LogHandlerType = (messages: any[], context: Object) => void;
declare type ProviderLogConfigObject = {
  level:string,
  handler: LogHandlerType
};
