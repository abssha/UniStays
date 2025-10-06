import React, { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Hostel from './explore/Hostel'
import Team from './pages/Team'
import Explore from './components/Explore'
import Footer from './components/Footer'
import { BounceLoader } from 'react-spinners'

function App() {

  const cities=[
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1582114421/NewWebsite/cities/delhi.png",
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png",
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1637904076/Website/CMS-Uploads/gadbjhmexjzadryrckds.png",
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto/v1582114421/NewWebsite/cities/pune.png",
    "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/v1582114421/NewWebsite/cities/chennai.png",
  ]

  const [loading,setLoading]=useState(false)

  return (
    <div className='relative h-full w-full'>
      {loading && (
      <div className='w-full z-500 h-full bg-black/50 fixed top-0 flex flex-col items-center justify-center'>
        <BounceLoader
          color='#86E7D4'
          className=''
        />
        <p className="mt-4 text-xl italic font-medium text-white">
            Finding the best <span className='text-teal-400'>hostels</span> for you ...
        </p>
      </div>
      )}
      <Nav setLoading={setLoading}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/hostel' element={<Hostel/>}/>
        <Route path='/explore' element={<Explore city={cities} setLoading={setLoading}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App