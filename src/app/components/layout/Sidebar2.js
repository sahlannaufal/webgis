'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faMapLocation, faBars, faLayerGroup, faRuler} from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';
import Search from './Search';
import Layer from './Layer';
import Basemaps from './Basemaps';
import Ruler from './Ruler';
import Map from './Map';

function Sidebar2( ) {

  const [clickedButtonId, setClickedButtonId] = useState('streets-v2');

  const [activeLayer, setActiveLayer] = useState(null);
  const handleLayerToggle = (layerName) => {
            // Cek apakah layer saat ini adalah layer yang sama dengan yang diklik
  if (activeLayer === layerName) {
    // Jika layer aktif adalah yang sama, matikan layer tersebut
    setActiveLayer(null);
  } else {
    // Jika layer aktif bukan yang sama, aktifkan layer tersebut
    setActiveLayer(layerName);
  }
  };

  // const toggleLayer = (layerName) => {
  //   setLayerVisibility((prevVisibility) => ({
  //     ...prevVisibility,
  //     [layerName]: !prevVisibility[layerName],
  //   }));
  // };

  
    const [sidebarContent, setSidebarContent] = useState([false, false, false, false, false]);

    const showContent = (index) => {
    const updatedContent = Array(5).fill(false);
    updatedContent[index] = !sidebarContent[index];
    setSidebarContent(updatedContent);
    };


  return (
    <>
    <Map clickedButtonId={clickedButtonId} activeLayer={activeLayer}/>
    <aside className="h-screen w-16 pt-8 pb-4 bg-white flex justify-center absolute z-20">
        <nav className="">
          <ul className="flex-row mx-auto ">
            <li id='bars' className={"item-detail-button m1 mb-6"}>
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faBars} className="w-10 h-10" onClick={() => showContent(1)} />
                      
              </a>
            </li>
            <li id='search' className="mb-6">
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faSearch} className=" w-10 h-10" onClick={() => showContent(2)}/>
                
              </a>
            </li>
            <li id='layer' className="mb-6">
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faLayerGroup} className="w-10 h-10" onClick={() => showContent(3)}/>
                
              </a>
            </li>
            <li id='peta' className="mb-6">
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faMapLocation} className=" w-10 h-10" onClick={() => showContent(4)}/>
               
              </a>
            </li>
            <li id='ruler' className="mb-2">
              <a href="#" className="flex items-center text-blue-900">
                <FontAwesomeIcon icon={faRuler} className=" w-10 h-10" onClick={() => showContent(5)}/>
               
              </a>
            </li>
          </ul>
         
         

        </nav>
        
    </aside>
    {sidebarContent[1] && 
    <Dashboard setSidebarContent={setSidebarContent}/>
    }
    {sidebarContent[2] && 
    <Search setSidebarContent={setSidebarContent}/>
    }
    {sidebarContent[3] && 
    <Layer handleLayerToggle={handleLayerToggle} setSidebarContent={setSidebarContent}/>
    }
    {sidebarContent[4] && 
    <Basemaps setClickedButtonId={setClickedButtonId} setSidebarContent={setSidebarContent}/>
    }
    {sidebarContent[5] && 
    <Ruler setSidebarContent={setSidebarContent}/>
    }
    </>
  )
}

export default Sidebar2