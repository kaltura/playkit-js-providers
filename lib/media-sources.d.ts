import ImageSource from '../../src/entities/image-source';
import { ProviderMediaSourceObject } from './media-source';
import { PKExternalCaptionObject } from './external-caption-object';
export type ProviderMediaSourcesObject = {
    progressive: Array<ProviderMediaSourceObject>;
    dash: Array<ProviderMediaSourceObject>;
    hls: Array<ProviderMediaSourceObject>;
    image: Array<ImageSource>;
    captions?: Array<PKExternalCaptionObject>;
};
//# sourceMappingURL=media-sources.d.ts.map