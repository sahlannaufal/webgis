import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPlus, faLocation, faSearch, faMapLocation, faBars, faLayerGroup, faRuler, faAngleLeft, faMinus, faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Layer({ setSidebarContent, handleLayerToggle}) {



    const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div id='isilayer' className="z-10 absolute h-screen bg-white top-0 left-16 peer-focus:left-0 peer:transition ease-out delay-150 duration-200" >
    <div className="flex flex-col items-center">
      <h1 className="text-base text-left cursor-pointer font-bold bg-blue-900 text-white border-b border-gray-100 pb-4 pt-4 w-full">
      <FontAwesomeIcon 
      id='backlayer' 
      icon={faAngleLeft} 
      className=" w-4 h-4 pl-4 pr-4" 
      onClick={() => {
        setSidebarContent([false, false, false, false, false]); // Set sidebarContent menjadi false di sini
      }}/>
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
                  <button  
                  className='layer-button flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'
                  > 
                    <label id='toggleLayer1' className='relative inline-flex items-center w-full cursor-pointer'>
                      <input  
                      type='checkbox' 
                      value='' 
                      className=' sr-only peer' 
                      // checked={layerVisibility.testing}
                      onClick={() => handleLayerToggle('testing')}
                      // onClick={() => toggleLayer('testing')}
                      />
                        <div onClick={() => handleLayerToggle('testing')}  className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                        </div>
                          <span onClick={() => handleLayerToggle('testing')}  className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Testing</span>
                    </label>
                  </button>
                </li>
                <li>
                  <button  
                  className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'
                  >
                    <label id='toggleLayer2' className='relative inline-flex items-center w-full cursor-pointer'>
                      <input 
                      type='checkbox' 
                      value='' 
                      className='sr-only peer' 
                      // checked={layerVisibility.BANGUNAN_AR_25K}
                      onClick={() => handleLayerToggle('BANGUNAN_AR_25K')}
                      // onClick={() => toggleLayer('BANGUNAN_AR_25K')}
                      />
                        <div onClick={() => handleLayerToggle('BANGUNAN_AR_25K')} className='w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-900'>
                        </div>
                          <span onClick={() => handleLayerToggle('BANGUNAN_AR_25K')} className='ml-3 text-xs font-medium text-gray-900 dark:text-gray-300'>Bangunan_AR_25K</span>
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
  )
}

export default Layer