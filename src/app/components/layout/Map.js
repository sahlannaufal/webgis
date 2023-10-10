'use client';
import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from '@maptiler/sdk';


 function Map({clickedButtonId, activeLayer}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(106.86522);
  const [lat] = useState(-6.40108);
  const [zoom] = useState(14);
  const [API_KEY] = useState('npXcGxdghNnPva1tMhQW');
  const initialStyle = "streets-v2";
  const layers = {};

  console.log(activeLayer);

  const basemaps = [
    {
      id: 'streets-v2',
      label: 'Streets-v2',
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      imageSrc: 'https://cloud.maptiler.com/static/img/maps/streets-v2.png'
    },
    {
      id: 'streets-v2-light',
      label: 'Streets-v2-light',
      style: `https://api.maptiler.com/maps/streets-v2-light/style.json?key=${API_KEY}`,
      imageSrc: 'https://cloud.maptiler.com/static/img/maps/streets-v2-light.png'
    },
    {
      id: 'streets-v2-dark',
      label: 'Streets-v2-dark',
      style: `https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${API_KEY}`,
      imageSrc: 'https://cloud.maptiler.com/static/img/maps/streets-v2-dark.png'
    },
    {
      id: 'streets-hybrid',
      label: 'Hybrid',
      style: `https://api.maptiler.com/maps/hybrid/style.json?key=${API_KEY}`,
      imageSrc: 'https://cloud.maptiler.com/static/img/maps/hybrid.png'
    }
  ];


    const newBasemap = basemaps.find((basemap) => basemap.id === clickedButtonId);

    if (newBasemap && map.current) {
      map.current.setStyle(newBasemap.style);
    }

    


  useEffect(() => {
    console.log('activeLayer dalam komponen Map:', activeLayer);
    if (map.current) return; 


    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/${initialStyle}/style.json?key=${API_KEY}`,
      // style: initialStyle,
      center: [lng,lat],
      zoom: zoom
    });


    map.current.on('load', function() {


      map.current.addSource('magang', {
        type: 'raster',
        tiles: [
          `http://113.20.29.25:15590/geoserver/wms?VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=magang:testing&STYLES=&SRS=EPSG:3857&CRS=EPSG:3857&TILED=true&WIDTH=512&HEIGHT=512&BBOX={bbox-epsg-3857}`    
        ],
        maxzoom: 40,
      });
    
      map.current.addLayer({
        id: 'testing',   // ini nama layer yg di geoserver
        type: 'raster',
        source: 'magang',
        paint: {},
        layout: {
          visibility: 'none' // Set visibilitas awal menjadi 'none'
        }
      });


      map.current.addSource('magang1', {
        type: 'raster',
        tiles: [
          `http://113.20.29.25:15590/geoserver/wms?VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=magang:BANGUNAN_AR_25K&STYLES=&SRS=EPSG:3857&CRS=EPSG:3857&TILED=true&WIDTH=512&HEIGHT=512&BBOX={bbox-epsg-3857}`    
        ],
        maxzoom: 40,
      });
    
      map.current.addLayer({
        id: 'BANGUNAN_AR_25K',   // ini nama layer yg di geoserver
        type: 'raster',
        source: 'magang1',
        paint: {},
        layout: {
          visibility: 'none' // Set visibilitas awal menjadi 'none'
        }
      });

    map.current.addSource('wms-test-source', {
      'type': 'raster',
      // use the tiles option to specify a WMS tile source URL
      // https://maplibre.org/maplibre-style-spec/sources/
      'tiles': [
          'http://103.6.53.254:11190/geoserver/ptm/wms?service=WMS&version=1.1.0&request=GetMap&layers=ptm%3Amalang&bbox=112.6443325%2C-8.1542762E7%2C1.127444649E9%2C-8.0&width=768&height=330&srs=EPSG%3A4326&styles=&format=application/openlayers'
      ],
      'tileSize': 256
    })
      map.current.addLayer(
        {
            'id': 'wms-test-layer',
            'type': 'raster',
            'source': 'wms-test-source',
            'paint': {}
        },    
    );
    'aeroway_fill'

    const popup = new maplibregl.Popup({closeOnClick: false})
        popup.setLngLat([106.8272291, -6.175392])
        popup.setHTML('<h1>Ini Monas!</h1>')
        popup.addTo(map.current);

        map.current.addControl(
          new maplibregl.GeolocateControl({
              positionOptions: {
                  enableHighAccuracy: true
              },
              trackUserLocation: true
          }), "bottom-right"
      );
          console.log()

    map.current.addControl(
      new maplibregl.NavigationControl(), "bottom-right");

});
  


  }, [API_KEY, lng, lat, zoom]);


  useEffect(() => {
    if (map.current && (activeLayer === 'testing' || activeLayer === 'BANGUNAN_AR_25K')) {
      console.log(`yang ditekan ${activeLayer}`)
      const currentVisibility = map.current.getLayoutProperty(activeLayer, 'visibility');
      map.current.setLayoutProperty(activeLayer, 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    }
  }, [activeLayer]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;