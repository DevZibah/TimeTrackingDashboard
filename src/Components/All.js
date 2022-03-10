import React from 'react'
import jeremy from '../assets/image-jeremy.png'
import { Link } from 'react-router-dom'
const All = () => {
  return (
    <div className='all'>
      <div className='All'>
        <div className='image'>
          <img src={jeremy} alt='' />
        </div>
        <div>
          <p>
            Report for <br /> <span>Jeremy Robson</span>
          </p>
        </div>
      </div>
      <div className='dwm'>
        <div className='link'>
          <Link className='link-one' to='/Daily'>
            Daily
          </Link>
        </div>
        <div className='link'>
          <Link className='link-one' to='/Weekly'>
            Weekly
          </Link>
        </div>
        <div className='link'>
          <Link className='link-one' to='/Montly'>
            Montly
          </Link>
        </div>
      </div>
    </div>
  )
}

export default All
