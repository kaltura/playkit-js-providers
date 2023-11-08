import ImageSource from '../../src/entities/image-source';
import { ProviderMediaConfigMetadataObject } from './media-config-metadata';
import { PKExternalCaptionObject } from './external-caption-object';
import { ProviderMediaSourceObject } from './media-source';
export type ProviderMediaConfigSourcesObject = {
    dash: Array<ProviderMediaSourceObject>;
    hls: Array<ProviderMediaSourceObject>;
    progressive: Array<ProviderMediaSourceObject>;
    image: Array<ImageSource>;
    duration: number;
    type: string;
    id: string;
    poster: string | Array<Object>;
    dvr: boolean;
    vr?: Object;
    metadata: ProviderMediaConfigMetadataObject;
    captions?: Array<PKExternalCaptionObject>;
    downloadUrl?: string;
};
//# sourceMappingURL=media-config-sources.d.ts.map