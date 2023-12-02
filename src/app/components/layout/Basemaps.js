import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPlus, faLocation, faSearch, faMapLocation, faBars, faLayerGroup, faRuler, faAngleLeft, faMinus, faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Basemaps({ setSidebarContent, setClickedButtonId }) {

    
    

      // State untuk melacak tombol yang diklik
    // const [clickedButtonId, setClickedButtonId] = useState(null);
      // Fungsi yang akan dipanggil saat tombol diklik
    const handleButtonClick = (id) => {
        setClickedButtonId(id)
      };
      

  return (
    <div id='isipeta' className="z-10 absolute h-screen bg-white top-0 left-16 peer-focus:left-0 peer:transition ease-out delay-150 duration-200" >
            <div className="flex flex-col">
                <h1 className="text-base text-left cursor-pointer font-bold bg-blue-900 text-white border-b border-gray-100 pb-4 pt-4">
                <FontAwesomeIcon 
                id='backpeta' 
                icon={faAngleLeft} 
                className=" w-4 h-4 pl-4 pr-4" 
                onClick={() => {
                    setSidebarContent([false, false, false, false, false]); // Set sidebarContent menjadi false di sini
                  }}/>
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
                      <button id= 'streets-v2' className='w-20' onClick={() => handleButtonClick('streets-v2')}>
                        <img src="https://cloud.maptiler.com/static/img/maps/streets-v2.png" className='' />
                      </button>
                      <button id= 'streets-v2-light' className=' w-20' onClick={() => handleButtonClick('streets-v2-light')}>
                        <img src="https://cloud.maptiler.com/static/img/maps/streets-v2-light.png" className='' />
                      </button>
                      <button id= 'streets-v2-dark' className='w-20' onClick={() => handleButtonClick('streets-v2-dark')}>
                        <img src="https://cloud.maptiler.com/static/img/maps/streets-v2-dark.png" className='' />
                      </button>
                      <button id= 'streets-hybrid' className='w-20' onClick={() => handleButtonClick('streets-hybrid')}>
                        <img src="https://cloud.maptiler.com/static/img/maps/hybrid.png" className='' />
                      </button>
                    </div>  
                </div>
            </div>
          </div>
  )
}

export default Basemaps