import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPlus, faLocation, faSearch, faMapLocation, faBars, faLayerGroup, faRuler, faAngleLeft, faMinus, faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Ruler({ setSidebarContent }) {
  return (
    <div id='isiruler' className="z-10 absolute top-6 right-6 box-border h-48 w-56 p-4 border-2 border-blue-900 items-center bg-white text-gray-800 ">
              <h1 className='p-0.5 border-b-2 pb-2'>Pengukuran</h1>
              <FontAwesomeIcon 
              id='backruler' 
              icon={faX} 
              className="absolute left-36 top-2 w-14 p-4" 
              onClick={() => {
                setSidebarContent([false, false, false, false, false]); // Set sidebarContent menjadi false di sini
              }}/>

              <br></br>
              <label>Luas :</label> <br></br>
              <label>Panjang :</label>

              <div className='absolute left-10 mt-3'>

                <button className='px-4 py-1 border border-blue-900 bg-white text-blue-900 m-2'>Reset</button>
                <button className='px-4 py-1 border border-blue-900 bg-white text-blue-900' 
                onClick={() => {
                    setSidebarContent([false, false, false, false, false]); // Set sidebarContent menjadi false di sini
                  }}>
                    Done</button>
              </div>
    </div>
  )
}

export default Ruler