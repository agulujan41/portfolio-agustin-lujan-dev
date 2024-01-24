import React from 'react'
import logo from '../../images/avatar.png'
import './stylingSplashLoader.css'
import "./scriptLoading"
const SplashLoader = () => {
  return (
    <div className='show' id="loader">

        <img src={logo} className="App-logo" alt="logo"  loading="lazy" 
            style={
                {
                    width:'30vh',
                    height:'30vh',
            
                }
            }
        />
    </div>
  )
}

export default SplashLoader
