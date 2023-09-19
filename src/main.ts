import type { Map, IControl } from 'maplibre-gl';
import './style.scss';

// Type for options
interface Options {
  text: string;
};

// Default options
const defaultOptions: Options = {
  text: 'Hello, world!',
};

export class SampleControl implements IControl {
  private text: string;
  private container!: HTMLDivElement;
  private map: Map | null;

  constructor(options?: Options) {
    this.text = options?.text || defaultOptions.text;
    this.map = null;
  };

  // Add a paragraph
  private paragraphAdd(text: string) {
    // Create a paragraph
    const paragraph = document.createElement('p');
    paragraph.innerText = text;

    // Add to the container
    this.container.appendChild(paragraph);
  };

  // Add a fly button
  private flyButtonAdd({ text, lnglat, zoom = 10, speed = 0.8 }: { text: string, lnglat: [number, number], zoom?: number, speed?: number }) {
    // Create a button
    const flyButton = document.createElement('input');
    flyButton.type = 'button';
    flyButton.value = text;

    // Add a click event
    flyButton.addEventListener('click', () => {
      this.map?.flyTo({
        center: lnglat,
        zoom: zoom,
        speed: speed
      });
    });

    // Add to the container
    this.container.appendChild(flyButton);
  };

  // Add a container
  private sampleControlAdd() {
    // Set class names and id's
    this.container.className = 'maplibregl-ctrl maplibregl-ctrl-group';
    this.container.id = 'sample-control';

    // Please write your favorite control here
    // For example,

    // Add a custom text
    this.paragraphAdd(this.text);

    // Add a fry-to-Sapporo button
    this.flyButtonAdd({ text: 'Fly to Sapporo', lnglat: [141.34, 43.07] });
  };

  onAdd(map: Map) {
    this.container = document.createElement('div');
    this.map = map;

    // Add the control
    this.sampleControlAdd();
    return this.container;
  };

  onRemove() {
    // Refly the container
    this.container.parentNode?.removeChild(this.container);
    this.map = null;
  };
};
