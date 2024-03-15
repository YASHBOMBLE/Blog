import React from 'react'
import Navbar from '../../component/Navbar.js'

function Home() {
  return (
    <div>
        <Navbar />

        <div className='row'>
          <div className='col-12'>
            Top Trending Blogs
          </div>
        </div>
    </div>
  )
}

export default Home