import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { SampleControl } from '../src/main.ts';

const map = new Map({
  container: 'map',
  style: {
    version: 8,
    sources: {
      osm: {
        type: 'raster',
        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
        tileSize: 256,
        attribution: '<a href="https://osm.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
      },
    },
    layers: [
      {
        id: 'osm',
        type: 'raster',
        source: 'osm',
      }
    ],
  },
  center: [0, 0],
  zoom: 1,
});

map.on('load', () => {
  // Add the sample control
  const Sample = new SampleControl();
  map.addControl(Sample);
});
