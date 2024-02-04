import type { IControl } from 'maplibre-gl';
import type { Map as Map_2 } from 'maplibre-gl';

declare interface Options {
    text: string;
}

export declare class SampleControl implements IControl {
    private text;
    private container;
    private map;
    constructor(options?: Options);
    private paragraphAdd;
    private flyButtonAdd;
    private sampleControlAdd;
    onAdd(map: Map_2): HTMLDivElement;
    onRemove(): void;
}

export { }
