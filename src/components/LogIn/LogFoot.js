import React from 'react'
import "./Style/LogFoot.css"

const LogFoot = () => {
  return (
    <div className='footer'>
      <p>@{new Date().getFullYear()} SawanRawat. All Rights Reserved</p>
    </div>
  )
}

export default LogFoot