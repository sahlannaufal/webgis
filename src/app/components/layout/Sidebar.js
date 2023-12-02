'use client';

import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPlus, faLocation, faSearch, faMapLocation, faBars, faLayerGroup, faRuler, faAngleLeft, faMinus, faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { MapLibreSearchControl } from "@stadiamaps/maplibre-search-box";
import "@stadiamaps/maplibre-search-box/dist/style.css";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import 'mapbox-gl-controls/lib/controls.css';

import { searchLokasi } from './Api'

function Sidebar() {
  
  //Map
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(106.86522);
  const [lat] = useState(-6.40108);
  const [zoom] = useState(14);
  const [API_KEY] = useState('npXcGxdghNnPva1tMhQW');
  var initialStyle = "streets-v2";
  const layers = {};




   //basemap
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

  const changeBasemap = (event) => {
    const selectedBasemapId = event.target.dataset.basemap;
    const newBasemap = basemaps.find((basemap) => basemap.id === selectedBasemapId);

    if (newBasemap && map.current) {
      map.current.setStyle(newBasemap.style);
    }
  };

  function toggleLayer(layerId) {
    if (map.current.getLayoutProperty(layerId, 'visibility') === 'visible') {
      map.current.setLayoutProperty(layerId, 'visibility', 'none');
    } else {
      map.current.setLayoutProperty(layerId, 'visibility', 'visible');
    }
  }
  
  // const button = document.getElementById('toggleLayer1');
  // button.addEventListener('click', () => {
  //   toggleLayer('testing'); // Ganti dengan id layer yang ingin Anda atur visibilitasnya
  // });
  



//   //Menambah layer dari geoserver
//   function addWMSServerLayer(layerName, serverUrl, layerTitle) {
//     var wmsLayer = L.tileLayer.wms(serverUrl, {
//         layers: layerName,
//         format: 'image/png',
//         transparent: true,
//         attribution: layerTitle,
//     }).addTo(map);
// }

//   // Tambahkan event listener ke tombol untuk menambahkan lapisan
//   var addLayerRutin = document.getElementById('rutin');
//   addLayerRutin.addEventListener('click', function () {
//       // Panggil fungsi untuk menambahkan lapisan pertama dari GeoServer
//       addWMSServerLayer('Rutin', 'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015', 'Layer Rutin');
//   });




// const wmsLayers = [
//   {
//     name: 'Natural2015',
//     url: 'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015',
//     added: false,
//   },    
//   {
//     name: 'layer2',
//     url: 'https://example.com/wms-service-url2',
//     added: false,
//   },
//   // Add more layers as needed
// ];

// function toggleWMSLayer(layerName) {
//   const layer = wmsLayers.find((l) => l.name === layerName);
//   if (layer) {
//     if (layer.added) {
//       map.removeLayer(layer.name);
//       map.removeSource(layer.name);
//       layer.added = false;
//     } else {
//       map.current.addSource(layer.name, {
//         type: 'raster',
//         tiles: [
//           `${layer.url}`
//         ],
//         tileSize: 256,
//       });

//       map.current.addLayer({
//         id: 'wms-test-layer',
//         type: 'raster',
//         source: 'wms-test-source',
//       });

//       layer.added = true;
//     }
//   }
// }

// const layerButtons = document.querySelectorAll('.layer-button');
// layerButtons.forEach((button) => {
//   const layerName = button.getAttribute('data-layer-name');
//   button.addEventListener('click', () => {
//     toggleWMSLayer(layerName);
//   });
// });


// const [showLayer, setShowLayer] = useState(true);

// const toggleLayer = () {
//   if (showLayer) {
//     map.current.setLayoutProperty('testing', 'visibility','none');
//   } else {
//     map.current.setLayoutProperty('testing','visibility','visible');
//   }
//   setShowLayer(!showLayer);
// };



const [listLokasi, setListLokasi] = useState([]);


   const search = async(q) => {
    if (q.length >3) {
    const query = await searchLokasi(q)
    setListLokasi(query)
    // console.log({query: query})
    console.log(listLokasi);
    const daftarListLokasi = () => {
      return listLokasi.map((search, id) => {
        return (
          <div key={search.mapbox_id}>
            {search.name}
            </div> 
        )
      })
    }
    daftarListLokasi();
   }
  }


  

  // const toggleLayerVisibility = (layerId) => {
  //   const visibility = map.current.getLayoutProperty(layerId, 'visibility');
  //   map.current.setLayoutProperty(layerId, 'visibility', visibility === 'visible' ? 'none' : 'visible');
  // };

  // const toggleLayer1 = toggleLayerVisibility('testing');

//   document.addEventListener('DOMContentLoaded', function () {

// //   // Toggle visibility of the first layer
//   document.getElementById('toggleLayer1').addEventListener('click', () => {
//     console.log("tes");
// //     toggleLayerVisibility('testing');
//   });

//   // Toggle visibility of the second layer
//   document.getElementById('toggleLayer2').addEventListener('click', () => {
//     alert("tertekan");
//     toggleLayerVisibility('BANGUNAN_AR_25K');
  // });
// });
// const cetakKata = () => {
//   // Logika yang akan dijalankan saat tombol diklik
//   console.log('Tombol diklik!');
// };

// let toggleLayerButton = document.getElementById('toggleLayer1');
// let isLayerVisible = true;



  useEffect(() => {

    // const toggleLayerButton = document.getElementById('toggleLayer1');
    // let isLayerVisible = true;

    // toggleLayerButton.addEventListener('click', () => {
    //   if (isLayerVisible) {
    //     map.current.setLayoutProperty('testing', 'visibility', 'none');
    //     isLayerVisible = false;
    //   } else {
    //     map.current.setLayoutProperty('testing', 'visibility', 'visible');
    //     isLayerVisible = true;
    //   }
    // });

    // if (toggleLayerButton) {
    //   toggleLayerButton.addEventListener('click', cetakKata);
    // }

    // function toggleLayerVisibility(layerId) {
    //   var visibility = map.getLayoutProperty(layerId, 'visibility');
    //   map.setLayoutProperty(layerId, 'visibility', visibility === 'visible' ? 'none' : 'visible');
    // }

    // // Menggunakan fungsi untuk toggle visibilitas layer pertama
    // document.getElementById('toggleLayer1').addEventListener('click', function () {
    //   toggleLayerVisibility('testing');
    // });

    // // Menggunakan fungsi untuk toggle visibilitas layer kedua
    // document.getElementById('toggleLayer2').addEventListener('click', function () {
    //   toggleLayerVisibility('BANGUNAN_AR_25K');
    // });


// setListLokasi(searchLokasi())



    global
    if (map.current) return; // stops map from intializing more than once

    // const control = new MapLibreSearchControl();

    // const initializeMap = async () => {

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/${initialStyle}/style.json?key=${API_KEY}`,
      // style: initialStyle,
      center: [lng,lat],
      zoom: zoom
    });


    // map.current.addControl(control, "top-right");

  //   const wmsLayer = {
  //     id: 'wms-layer', // ID layer
  //     type: 'raster',
  //     source: {
  //       type: 'raster',
  //       tiles: ['http://113.20.29.25:15590/geoserver/wms?', 'layers=magang:ADMINISTRASI_LN_25K'], // Ganti dengan URL WMS GeoServer Anda dan nama lapisan WMS
  //       tileSize: 256,
  //     },
  //   };

  //   map.current.on('load', () => {
  //     map.current.addLayer(wmsLayer);
  //   });
  // };

  // initializeMap();



    

    // //integrasi search ke html

    // const searchInput = document.getElementById('search-input');
    // const searchResults = document.getElementById('search-results');
    // const searchButton = document.getElementById('search-button');

    // const searchControl = new MapLibreSearchControl({
    //   accessToken: 'pk.eyJ1Ijoic2FobGFubmF1ZmFsIiwiYSI6ImNsbXI0YzQzZzAzOWYybHA5ZWozb3hhbGUifQ.c2yCD-whubLOVmyjz-WMaw',
    //   marker: {
    //       color: 'blue',
    //   },
    // }); 

    // // Tambahkan event listener ke tombol pencarian
    // searchButton.addEventListener('click', () => {
    //   map.current.addControl(searchControl, 'top-right'); // Tambahkan kontrol pencarian ke peta
    // });

    // searchControl.on('result', (event) => {
    //   const result = event.result;
    //   // Lakukan sesuatu dengan hasil pencarian, misalnya, tampilkan dalam elemen HTML
    //   displaySearchResult(result);
    // });

    // searchInput.addEventListener('input', (event) => {
    //   const query = event.target.value;
    //   searchControl.query(query);
    // });

    // // Fungsi untuk menampilkan hasil pencarian di dalam elemen HTML
    // function displaySearchResult(result) {
    //   searchResults.innerHTML = '';
    //   if (result.features.length === 0) {
    //       searchResults.innerHTML = 'Tidak ada hasil ditemukan.';
    //       return;
    //   }

    //   result.features.forEach((feature) => {
    //       const name = feature.place_name;
    //       const item = document.createElement('div');
    //       item.className = 'search-result-item';
    //       item.textContent = name;
    //       item.addEventListener('click', () => {
    //           // Centang lokasi yang dipilih pada peta
    //           map.flyTo({
    //               center: feature.geometry.coordinates,
    //               zoom: 12,
    //           });
    //       });
    //       searchResults.appendChild(item);
    //   });
    // }
    




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
        visibility: 'visible'
      });

      layers['testing'] = {
        id: 'testing',
        visibility: 'visible', // Set visibilitas awal menjadi 'visible'
      };

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
      });

      layers['BANGUNAN_AR_25K'] = {
        id: 'BANGUNAN_AR_25K',
        visibility: 'visible', // Set visibilitas awal menjadi 'none'
      };

      




    map.current.addSource('wms-test-source', {
      'type': 'raster',
      // use the tiles option to specify a WMS tile source URL
      // https://maplibre.org/maplibre-style-spec/sources/
      'tiles': [
        'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015'
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

      //togglelayer

      


      //Sidebar
      const [toggleCollapse, setToggleCollapse] = useState(true);
      const [showSidebarContent1, setShowSidebarContent1] = useState(false);
      const [showSidebarContent2, setShowSidebarContent2] = useState(false);
      const [showSidebarContent3, setShowSidebarContent3] = useState(false);
      const [showSidebarContent4, setShowSidebarContent4] = useState(false);
      const [showSidebarContent5, setShowSidebarContent5] = useState(false);
      const [toggleDropdown, setToggleDropdown] = useState(false);


      const showContent1 = () => {
        setShowSidebarContent1(!showSidebarContent1);
        setShowSidebarContent2(false);
        setShowSidebarContent3(false);
        setShowSidebarContent4(false);
        setShowSidebarContent5(false);
      };

      const showContent2 = () => {
        setShowSidebarContent1(false);
        setShowSidebarContent2(!showSidebarContent2);
        setShowSidebarContent3(false);
        setShowSidebarContent4(false);
        setShowSidebarContent5(false);
      };

      const showContent3 = () => {
        setShowSidebarContent1(false);
        setShowSidebarContent2(false);
        setShowSidebarContent3(!showSidebarContent3);
        setShowSidebarContent4(false);
        setShowSidebarContent5(false);
      };

      const showContent4 = () => {
        setShowSidebarContent1(false);
        setShowSidebarContent2(false);
        setShowSidebarContent3(false);
        setShowSidebarContent4(!showSidebarContent4);
        setShowSidebarContent5(false);
      };

      const showContent5 = () => {
        setShowSidebarContent1(false);
        setShowSidebarContent2(false);
        setShowSidebarContent3(false);
        setShowSidebarContent4(false);
        setShowSidebarContent5(!showSidebarContent5);
      };



      // window.onload=function() {
        
      // }




      function munculLegend() {
        if (isiNotifLayer.style.display == 'none') {
            isiNotifLayer.style.display = 'block';
          } else {isiNotifLayer.style.display = 'none';
        }
      }



      
    return (
      <>
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
        
        <aside className="h-screen w-16 pt-8 pb-4 bg-white flex justify-center absolute z-20">
        <nav className="">
          <ul className="flex-row mx-auto ">
            <li id='bars' className={"item-detail-button m1 mb-6"}>
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faBars} className="w-10 h-10" onClick={showContent1}/>
                      
              </a>
            </li>
            <li id='search' className="mb-6">
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faSearch} className=" w-10 h-10" onClick={showContent2}/>
                
              </a>
            </li>
            <li id='layer' className="mb-6">
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faLayerGroup} className="w-10 h-10" onClick={showContent3}/>
                
              </a>
            </li>
            <li id='peta' className="mb-6">
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faMapLocation} className=" w-10 h-10" onClick={showContent4}/>
               
              </a>
            </li>
            <li id='ruler' className="mb-2">
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faRuler} className=" w-10 h-10" onClick={showContent5}/>
               
              </a>
            </li>
          </ul>
         

        </nav>
      </aside>

      {showSidebarContent1 && (
                      <div id='isibars' className="z-10 absolute flex h-screen bg-white top-0 left-16 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                      <div className="flex flex-col items-center">
                        <h1 className="text-base text-left cursor-pointer font-bold bg-blue-900 text-white border-b border-gray-100 pb-4 pt-4 w-full">
                        <FontAwesomeIcon id='backbars' icon={faAngleLeft} className=" w-4 h-4 pl-4 pr-4" onClick={() => setShowSidebarContent1(false)}/>
                          Dashboard
                        </h1>
                        <ul>
                          <li className="m-4 border border-blue-900 hover:bg-gray-200 p-2 group cursor-pointer hover:shadow-lg m-4">
                              <button className="flex justify-start items-start text-blue-900 ">
                                Dashboard Hak Tanggungan
                              </button>
                          </li>
                          <li className="m-4 border border-blue-900 hover:bg-gray-200 p-2 group cursor-pointer hover:shadow-lg m-4">
                              <button className="flex justify-start items-start text-blue-900 ">
                                Dashboard PPH
                              </button>
                          </li>
                          <li className="m-4 border border-blue-900 hover:bg-gray-200 p-2 group cursor-pointer hover:shadow-lg m-4">
                              <button className="flex justify-start items-start text-blue-900 ">
                                Dashboard Hak BPHTB
                              </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    )}

      {showSidebarContent2 && (
                  <div id='isisearch' className="z-10 absolute h-screen bg-white top-0 left-16 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                  <div id="search-container" className="p-3 bg-blue-900 border-gray-900"> 
                        <form>
                            <FontAwesomeIcon icon={faSearch} id="search-button" className="absolute w-6 h-6 text-gray-400 top-7 left-6" />
                            <input 
                            type="text" 
                            id="search-input" 
                            placeholder="Cari Lokasi" 
                            onChange={({target}) => search(target.value)}
                            className="rounded-lg border border-blue-900 py-3 px-11 bg-white placeholder-gray-400 text-gray-500 appearance-none focus:outline-none" />
                            <FontAwesomeIcon id='backsearch' icon={faAngleLeft} className="absolute w-6 h-6 text-gray-400 top-7 left-72" onClick={() => setShowSidebarContent2(false)}/>
                            <FontAwesomeIcon icon={faMinus} className="absolute rotate-90 w-12 h-6 text-gray-400 top-7 left-64" />
                            <div id="search-results" class="search-results"></div>
                        </form>
                    </div>
                    <div className='px-8 py-3'>
                        <form>
                            <h1 className="text-lg text-gray-800">Provinsi</h1>
                            <input type="text" placeholder="Pilih Provinsi" className="border border-gray-500 py-1 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none focus:outline-none w-full" />
                        </form>
                    </div>
                    <div className='px-8 py-3'>
                        <form>
                            <h1 className="text-lg text-gray-800">Kota / Kabupaten</h1>
                            <input type="text" placeholder="Pilih Kota / Kabupaten" className="border border-gray-500 py-1 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none focus:outline-none w-full" />
                        </form>
                    </div>
                    <div className='px-8 py-3'>
                        <form>
                            <h1 className="text-lg text-gray-800">Kecamatan</h1>
                            <input type="text" placeholder="Pilih Kecamatan" className="border border-gray-500 py-1 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none focus:outline-none w-full" />
                        </form>
                    </div>
                    <div className='px-8 py-3'>
                        <form>
                            <h1 className="text-lg text-gray-800">Desa / Kelurahan</h1>
                            <input type="text" placeholder="Pilih Desa / Kelurahan" className="border border-gray-500 py-1 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none focus:outline-none w-full" />
                        </form>
                    </div>
                    <div className='px-8 py-3'>
                        <form>
                            <h1 className="text-lg text-gray-800">NIB</h1>
                            <input type="text" placeholder="Masukan 5 Digit Nomor Identifikasi Bidang" className="border border-gray-500 py-1 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none focus:outline-none w-full" />
                        </form>
                    </div>
                    <div className='p-6'>
                        <button className='px-6 py-2 rounded-md bg-blue-900 text-white'>Cari Bidang</button>
                    </div>
                </div>
                )}

{showSidebarContent3 && (
        <div id='isilayer' className="z-10 absolute h-screen bg-white top-0 left-16 peer-focus:left-0 peer:transition ease-out delay-150 duration-200" >
            <div className="flex flex-col items-center">
              <h1 className="text-base text-left cursor-pointer font-bold bg-blue-900 text-white border-b border-gray-100 pb-4 pt-4 w-full">
              <FontAwesomeIcon id='backlayer' icon={faAngleLeft} className=" w-4 h-4 pl-4 pr-4" onClick={() => setShowSidebarContent3(false)}/>
                Layer
              </h1>
              <ul>
                <li id='dropdown1' className="m-4 border border-blue-900 p-2 group cursor-pointer m-4">
                    <button id='dropdownToggleButton' data-dropdown-toggle='dropdownToggle' className="flex justify-start items-start text-blue-900" type='button' onClick={() => setToggleDropdown((prev) => !prev)}>
                      Penguasaan & Pemilikan Tanah
                      <FontAwesomeIcon icon={faAngleDown} className="inset-y-0 right-0 w-4 h-4 pl-4 pt-1 object-left" />
                    </button>

                    {toggleDropdown && (
                      <div  className='z-20 bg-white divide-y divide-gray-100'>
                      <ul className='p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownToggleButton'>
                        <li>
                        <button id='toggleLayer1'
                          className='layer-button flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'
                          onClick={() => toggleLayer('testing')}
                        >
                          <label className='relative inline-flex items-center w-full cursor-pointer'>
                            {/* <input
                              id='toggleLayer1'
                              type='checkbox'
                              value=''
                              className='sr-only peer'
                            /> */}
                            <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                            </div>
                            <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Testing</span>
                          </label>
                        </button>

                        </li>
                        <li>
                        <button  
                        className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'
                        onClick={() => toggleLayer('BANGUNAN_AR_25K')}
                        >
                          <label  className='relative inline-flex items-center w-full cursor-pointer'>
                            {/* <input 
                            id='toggleLayer2'
                            type='checkbox' 
                            value='' 
                            className='sr-only peer' /> */}
                              <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                              </div>
                                <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Bangunan_AR_25K</span>
                          </label>
                        </button>
                        </li>
                        <li>
                          <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                            <label className='relative inline-flex items-center w-full cursor-pointer'>
                              <input type='checkbox' value='' className='sr-only peer' />
                                <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                                </div>
                                  <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Redistribusi Tanah</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                            <label className='relative inline-flex items-center w-full cursor-pointer'>
                              <input type='checkbox' value='' className='sr-only peer' />
                                <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                                </div>
                                  <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Sertifikasi Lintas Sektor</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                            <label className='relative inline-flex items-center w-full cursor-pointer'>
                              <input type='checkbox' value='' className='sr-only peer' />
                                <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                                </div>
                                  <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Transmigrasi (HM)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                            <label className='relative inline-flex items-center w-full cursor-pointer'>
                              <input type='checkbox' value='' className='sr-only peer' />
                                <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                                </div>
                                  <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Transmigrasi (HPL)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                            <label className='relative inline-flex items-center w-full cursor-pointer'>
                              <input type='checkbox' value='' className='sr-only peer' />
                                <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                                </div>
                                  <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Batas Kawasan Hutan (Pusdatin)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                            <label className='relative inline-flex items-center w-full cursor-pointer'>
                              <input type='checkbox' value='' className='sr-only peer' />
                                <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                                </div>
                                  <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Batas Hutan (SPPR)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                            <label className='relative inline-flex items-center w-full cursor-pointer'>
                              <input type='checkbox' value='' className='sr-only peer' />
                                <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                                </div>
                                  <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Hak Tanggungan</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                            <label className='relative inline-flex items-center w-full cursor-pointer'>
                              <input type='checkbox' value='' className='sr-only peer' />
                                <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                                </div>
                                  <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Detail HGU yang Masih Aktif</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                            <label className='relative inline-flex items-center w-full cursor-pointer'>
                              <input type='checkbox' value='' className='sr-only peer' />
                                <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                                </div>
                                  <span className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>HGU PTPN</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    )}
                    
                

                </li>
                <li className="m-4 border border-blue-900 p-2 group cursor-pointer m-4">
                    <button className="flex justify-start items-start text-blue-900 ">
                      Penilaian Tanah
                      <FontAwesomeIcon icon={faAngleDown} className="content-center w-4 h-4 pl-4 pt-1" />
                    </button>
                </li>
                <li className="m-4 border border-blue-900 p-2 group cursor-pointer m-4">
                    <button className="flex justify-start items-start text-blue-900 ">
                      Peruntukan & Penggunaan Tanah
                      <FontAwesomeIcon icon={faAngleDown} className="content-center w-4 h-4 pl-4 pt-1" />
                    </button>
                </li>
              </ul>
            </div>
          </div>
        )}

{showSidebarContent4 && (
          <div id='isipeta' className="z-10 absolute h-screen bg-white top-0 left-16 peer-focus:left-0 peer:transition ease-out delay-150 duration-200" >
            <div className="flex flex-col">
                <h1 className="text-base text-left cursor-pointer font-bold bg-blue-900 text-white border-b border-gray-100 pb-4 pt-4">
                <FontAwesomeIcon id='backpeta' icon={faAngleLeft} className=" w-4 h-4 pl-4 pr-4" onClick={() => setShowSidebarContent4(false)}/>
                    Mode Peta
                </h1>
                <div className='flex flex-row items-center'>
                    <div className='border border-blue-900 px-1 py-1 m-6 mr-4'>
                        <button>2D</button>
                    </div>
                    <div className=' border border-blue-900 px-1 py-1 m-6 mx-4'>
                        <button>3D Smooth</button>
                    </div>
                    <div className=' border border-blue-900 px-1 py-1 m-6 ml-4'>
                        <button>3D Terrain</button>
                    </div>
                </div>
                    <h1 className='font-bold text-gray-800 pl-6 pb-2'>
                        Peta Dasar
                    </h1>
                <div className=''>
                    <div className='pl-6 pr-6 grid gap-3 grid-cols-3 grid-rows-3 items-center'>
                            {basemaps.map((basemap) => (
                              <button
                                key={basemap.id}
                                onClick={changeBasemap}
                                data-basemap={basemap.id}
                                className="basemap-button w-20 h-20 bg-blue-900 hover:bg-blue-900 text-white font-small py-1 px-1 rounded flex items-center"
                              >
                                {/* {basemap.label} */}
                                <img 
                                  key={basemap.id}
                                  onClick={changeBasemap}
                                  data-basemap={basemap.id}
                                  src={basemap.imageSrc}
                                  alt={basemap.label}
                                  className="w-20"
                                />
                              </button>
                            ))}

                    </div>  
                </div>
            </div>
          </div>
        )}


{showSidebarContent5 && (
        <div id='isiruler' className="z-10 absolute top-6 right-6 box-border h-48 w-56 p-4 border-2 border-blue-900 items-center bg-white text-gray-800 ">
              <h1 className='p-0.5 border-b-2 pb-2'>Pengukuran</h1>
              <FontAwesomeIcon id='backruler' icon={faX} className="absolute left-36 top-2 w-14 p-4" onClick={() => setShowSidebarContent5(false)}/>

              <br></br>
              <label>Luas :</label> <br></br>
              <label>Panjang :</label>

              <div className='absolute left-10 mt-3'>

                <button className='px-4 py-1 border border-blue-900 bg-white text-blue-900 m-2'>Reset</button>
                <button className='px-4 py-1 border border-blue-900 bg-white text-blue-900' onClick={() => setShowSidebarContent5(false)}>Done</button>
              </div>
          </div>
        )}
          {/* <div id='isinotiflayer' className="absolute top-6 left-24 box-border h-52 w-56 p-4 border-2 border-blue-900 items-center bg-white text-gray-800 ">
              <FontAwesomeIcon icon={faLayerGroup} className="absolute left-1 top-2 w-4 p-4" />
              <h1 className='pl-7 pt-1 p-0.5 border-b-2 pb-2 font-bold'>Legend</h1>
              <div>
                <ul className='p-3 space-y-1 text-sm text-gray-700'>
                  <li>
                    <div className='flex items-center'>
                      <div className='flex box-content h-2 w-2 bg-orange-400 mr-2'></div>
                      <span className='flex-1 pr-1'>Rutin</span>
                      <FontAwesomeIcon icon={faInfoCircle} className="content-center w-3 h-3 pl-0 text-gray-400" />
                      <FontAwesomeIcon icon={faX} className="content-center w-2 h-2 pl-2" />
                    </div>
                    <input type='range' name='sRutin' className='w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer'></input>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <div className='flex box-content h-2 w-2 bg-fuchsia-700 mr-2'></div>
                      <span className='flex-1 pr-1'>Rutin</span>
                      <FontAwesomeIcon icon={faInfoCircle} className="content-center w-3 h-3 pl-0 text-gray-400" />
                      <FontAwesomeIcon icon={faX} className="content-center w-2 h-2 pl-2" />
                    </div>
                    <input type='range' name='sRutin' className='w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer'></input>
                  </li>
                </ul>
              </div>
          </div> */}


            {/* Navigasi */}
            {/* <div id='isiNotifLayer' className="absolute top-6 left-24 box-border h-52 w-56 p-4 border-2 border-blue-900 items-center bg-white text-gray-800 hidden">
              <FontAwesomeIcon icon={faLayerGroup} className="absolute left-1 top-2 w-4 p-4" />
              <h1 className='pl-7 pt-1 p-0.5 border-b-2 pb-2 font-bold'>Legend</h1>
              <div>
                <ul className='p-3 space-y-1 text-sm text-gray-700'>
                  <li>
                    <div className='flex items-center'>
                      <div className='flex box-content h-2 w-2 bg-orange-400 mr-2'></div>
                      <span className='flex-1 pr-1'>Rutin</span>
                      <FontAwesomeIcon icon={faInfoCircle} className="content-center w-3 h-3 pl-0 text-gray-400" />
                      <FontAwesomeIcon icon={faX} className="content-center w-2 h-2 pl-2" />
                    </div>
                    <input type='range' name='sRutin' className='w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer'></input>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <div className='flex box-content h-2 w-2 bg-fuchsia-700 mr-2'></div>
                      <span className='flex-1 pr-1'>Rutin</span>
                      <FontAwesomeIcon icon={faInfoCircle} className="content-center w-3 h-3 pl-0 text-gray-400" />
                      <FontAwesomeIcon icon={faX} className="content-center w-2 h-2 pl-2" />
                    </div>
                    <input type='range' name='sRutin' className='w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer'></input>
                  </li>
                </ul>
              </div>
          </div>

        <div className="absolute right-6 bottom-6">
                <a href="#" className="flex items-center bg-white text-blue-900 ">
                    <FontAwesomeIcon icon={faPlus} className="w-14 p-4" />
                </a>
                <a href="#" className="flex items-center bg-white text-blue-900 ">
                    <FontAwesomeIcon icon={faMinus} className="w-14 p-4" />
                </a>
                <div className="h-6"></div>
                <div className="">
                    <div id='notifLayer' className="flex items-center bg-white text-blue-900 ">
                        <FontAwesomeIcon icon={faLayerGroup} className=" w-14 p-4" />
                    </div>
                    <div href="#" className="absolute flex items-center bg-white text-blue-900 right-20 bottom-0">
                        <FontAwesomeIcon icon={faLocation} className="w-14 p-4" />
                    </div>
                </div>
        </div> */}


        

      </>
    );
  }

  export default Sidebar;