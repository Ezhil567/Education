import SourceMap from './source-map';
import type { SourceMapInput, SourceMapLoader, Options } from './types';
export type { SourceMapSegment, EncodedSourceMap, EncodedSourceMap as RawSourceMap, DecodedSourceMap, SourceMapInput, SourceMapLoader, LoaderContext, Options, } from './types';
export default function remapping(input: SourceMapInput | SourceMapInput[], loader: SourceMapLoader, options?: boolean | Options): SourceMap;
