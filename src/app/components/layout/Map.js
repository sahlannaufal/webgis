'use client';
import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import "@maptiler/sdk/dist/maptiler-sdk.css";


 function Map({clickedButtonId, activeLayer}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(106.86522);
  const [lat] = useState(-6.40108);
  const [zoom] = useState(14);
  const [API_KEY] = useState('npXcGxdghNnPva1tMhQW');
  const initialStyle = "hybrid";

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

    map.current.addControl(
      new maplibregl.NavigationControl(), "bottom-right");

});
  }, [API_KEY, lng, lat, zoom]);


  useEffect(() => {
    if (map.current) {
      if (clickedButtonId) {
        // Hapus sumber dan lapisan yang ada
        // removeMapLayersAndSources();
  
        const newBasemap = basemaps.find((basemap) => basemap.id === clickedButtonId);
  
        if (newBasemap) {
          // Set the new basemap style
          map.current.setStyle(newBasemap.style);
        }
  
        // Tambahkan kembali sumber dan lapisan
        // addMapLayersAndSources();
      }
    }
  }, [clickedButtonId]);

  useEffect(() => {
    if (map.current) {
      if (activeLayer === 'testing') {
        addMapLayersAndSources();
        // Untuk lapisan 'testing'
        const testingLayer = map.current.getLayer('testing');
        if (testingLayer) {
          const currentTestingVisibility = map.current.getLayoutProperty('testing', 'visibility');
          map.current.setLayoutProperty('testing', 'visibility', currentTestingVisibility === 'visible' ? 'none' : 'visible');
        }
      }
  
      if (activeLayer === 'BANGUNAN_AR_25K') {
        addMapLayersAndSources();
        // Untuk lapisan 'BANGUNAN_AR_25K'
        const bangunanLayer = map.current.getLayer('BANGUNAN_AR_25K');
        if (bangunanLayer) {
          const currentBangunanVisibility = map.current.getLayoutProperty('BANGUNAN_AR_25K', 'visibility');
          map.current.setLayoutProperty('BANGUNAN_AR_25K', 'visibility', currentBangunanVisibility === 'visible' ? 'none' : 'visible');
        }
      }
    }
  }, [activeLayer]);


  const addMapLayersAndSources = () => {
    if (map.current.getLayer('testing') === undefined){
    // if (!map.current.getLayer('testing')) {
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
    }
  
    // if (!map.current.getLayer('BANGUNAN_AR_25K')) {
      if (map.current.getLayer('BANGUNAN_AR_25K') === undefined){
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
    }
    }

  const removeMapLayersAndSources = () => {
    console.log("remove")
    if (map.current.getLayer('testing')) {
      map.current.removeLayer('testing');
    }
    if (map.current.getSource('magang')) {
      map.current.removeSource('magang');
    }
  
    if (map.current.getLayer('BANGUNAN_AR_25K')) {
      map.current.removeLayer('BANGUNAN_AR_25K');
    }
    if (map.current.getSource('magang1')) {
      map.current.removeSource('magang1');
    }
  };

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;