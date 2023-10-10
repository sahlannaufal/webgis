import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPlus, faLocation, faSearch, faMapLocation, faBars, faLayerGroup, faRuler, faAngleLeft, faMinus, faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


function Dashboard({ setSidebarContent }) {


  return (
                    <div id='isibars' className="z-10 absolute flex h-screen bg-white top-0 left-16 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                      <div className="flex flex-col items-center">
                        <h1 className="text-base text-left cursor-pointer font-bold bg-blue-900 text-white border-b border-gray-100 pb-4 pt-4 w-full">
                        <FontAwesomeIcon 
                        id='backbars'
                        icon={faAngleLeft} 
                        className=" w-4 h-4 pl-4 pr-4" 
                        onClick={() => {
                            setSidebarContent([false, false, false, false, false]); // Set sidebarContent menjadi false di sini
                          }}/>
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
  )
}

export default Dashboard