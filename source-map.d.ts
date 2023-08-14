import type { GenMapping } from '@jridgewell/gen-mapping';
import type { DecodedSourceMap, EncodedSourceMap, Options } from './types';
export default class SourceMap {
    file?: string | null;
    mappings: EncodedSourceMap['mappings'] | DecodedSourceMap['mappings'];
    sourceRoot?: string;
    names: string[];
    sources: (string | null)[];
    sourcesContent?: (string | null)[];
    version: 3;
    constructor(map: GenMapping, options: Options);
    toString(): string;
}
