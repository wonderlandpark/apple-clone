import React from 'react'

import './Menu.css'

export default function Menu () {
  return (
    <nav>
      <div className='content'>
        <a className="logo " href="/">
          <img src="https://www.apple.com/ac/globalnav/3/en_US/images/globalnav/apple/image_large.svg" width="45" height="45" alt="" />
        </a>
        <a href="/mac">Mac</a>
        <a href="#">iPad</a>
        <a href="#">iPhone</a>
        <a href="#">Watch</a>
        <a href="#">TV</a>
        <a href="/music">Music</a>
        <a href="#">Support</a>
        <a href="#" className="search"></a>
        <a href="#" className="bag"></a>
      </div>
    </nav>
  )
}
