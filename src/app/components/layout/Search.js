import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPlus, faLocation, faSearch, faMapLocation, faBars, faLayerGroup, faRuler, faAngleLeft, faMinus, faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Search({ setSidebarContent }) {
  return (
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
                            <FontAwesomeIcon 
                            id='backsearch' 
                            icon={faAngleLeft} 
                            className="absolute w-6 h-6 text-gray-400 top-7 left-72" 
                            onClick={() => {
                                setSidebarContent([false, false, false, false, false]); // Set sidebarContent menjadi false di sini
                              }}
                            />
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
  )
}

export default Search