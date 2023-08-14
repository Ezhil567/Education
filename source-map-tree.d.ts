import { GenMapping } from '@jridgewell/gen-mapping';
import type { TraceMap } from '@jridgewell/trace-mapping';
export declare type SourceMapSegmentObject = {
    column: number;
    line: number;
    name: string;
    source: string;
    content: string | null;
};
export declare type OriginalSource = {
    map: null;
    sources: Sources[];
    source: string;
    content: string | null;
};
export declare type MapSource = {
    map: TraceMap;
    sources: Sources[];
    source: string;
    content: null;
};
export declare type Sources = OriginalSource | MapSource;
export declare function MapSource(map: TraceMap, sources: Sources[]): MapSource;
export declare function OriginalSource(source: string, content: string | null): OriginalSource;
export declare function traceMappings(tree: MapSource): GenMapping;
export declare function originalPositionFor(source: Sources, line: number, column: number, name: string): SourceMapSegmentObject | null;
