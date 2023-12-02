'use client';
import Sidebar2 from './Sidebar2';
import Map from './Map';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

function Layout() {
  

  return (
    <>
    <div className="h-screen flex justify-start">
        {/* <Navigation /> */}
        {/* <Sidebar /> */}
        {/* <Map />  */}
        <Sidebar2/>
        {/* <Dashboard /> */}
        {/* <div className='absolute right-6 top-6'> */}
        {/* <Ukur /> */}
        {/* </div>     */}
        {/* <img src="/bg.jpg" className="flex-1"></img> */}
      
    
    </div>
    </>
  )
}

export default Layout;