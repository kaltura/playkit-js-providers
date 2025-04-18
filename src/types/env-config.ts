export type ProviderEnvConfigObject = {
  serviceUrl: string;
  cdnUrl?: string;
  analyticsServiceUrl?: string;
  useApiCaptions?: boolean;
  replaceHostOnlyManifestUrls?: boolean;
  overrideServiceUrl?: string;
  initCallToServer?: string;
};
