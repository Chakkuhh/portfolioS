import React from 'react'
import './Header.css'
import Por from './peakpx (1).jpg'

function Header() {
  return (
    <div className='name'>
      <div>
      <div className='row'>
            <div className='col-sm-6' >
              <div className='wrapper'>
                {/* <h1 className='heading'>I'm</h1> */}
                <ul className='dynamic'>
                  <li><span>I'm AmalNath k</span></li>
                  
                  
                </ul>
                </div>
                </div>
            <div className='col-sm-6'>
                <img src={Por} alt='#' />
            </div>
          
      </div>


    </div>
    </div>
  )
}

export default Header