import { Map } from 'maplibre-gl';
import './style.scss';

// Type of options
interface Options {
  text: string;
}

// Default options
const defaultOptions: Options = {
  text: 'Hello, world!',
};

export class SampleControl {
  _text: string;
  _container: HTMLDivElement;
  _map: Map | null;

  constructor(options?: Options) {
    this._text = options?.text || defaultOptions.text;

    // Create a container
    this._container = document.createElement('div');
    this._container.className = 'maplibregl-ctrl maplibregl-ctrl-group';
    this._container.id = 'sample-control';

    // Add a text
    const text = document.createElement('p');
    text.innerText = this._text;

    // Add the container
    this._container.appendChild(text);
    this._map = null;
  }

  onAdd(map: Map) {
    this._map = map;

    // Add the container
    return this._container;
  }

  onRemove() {
    // Remove the container
    this._container.parentNode?.removeChild(this._container);
    this._map = null;
  }
}
