import type { MapSource as MapSourceType } from './source-map-tree';
import type { SourceMapInput, SourceMapLoader } from './types';
export default function buildSourceMapTree(input: SourceMapInput | SourceMapInput[], loader: SourceMapLoader): MapSourceType;
