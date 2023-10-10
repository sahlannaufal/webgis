
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faLayerGroup, faLocation, faInfoCircle, faX } from '@fortawesome/free-solid-svg-icons';

function Navigation() {

    window.onload=function() {
        const notifLayer = document.getElementById('notifLayer');
        const isiNotifLayer = document.getElementById('isiNotifLayer');

        notifLayer.addEventListener('click', munculLegend);
      }

      function munculLegend() {
        if (isiNotifLayer.style.display == 'none') {
            isiNotifLayer.style.display = 'block';
          } else {isiNotifLayer.style.display = 'none';
        }
      }


    return ( 
        <>
        <div id='isiNotifLayer' className="z-50 absolute top-6 left-24 box-border h-52 w-56 p-4 border-2 border-blue-900 items-center bg-white text-gray-800 hidden">
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
        </div>
    </>
    );
  }

  export default Navigation;