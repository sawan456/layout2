import React from 'react'
import ImgLogo from '../img/b.png'

const LogHead = () => {
  return (
    <div style={{boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)"}} >
        <img src={ImgLogo} style={{height:"5rem",marginLeft:"4rem"}}/>
    </div>
  )
}

export default LogHead