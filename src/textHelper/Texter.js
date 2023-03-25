import React from 'react'
import './Texter.css'

function Texter({text}) {
  return (
      <div className='texter'>
        <span>{text}</span>
    </div>
  )
}

export default Texter