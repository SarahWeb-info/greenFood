import React , {useState} from 'react'
import "./Dialog.css";

export default function Dialog( { children, closeFunction } ) {

  return (
    <div className='dialog'>
    <div className='dialogBlur' onClick={closeFunction}></div>
    
    <div className='dialogContent'>
      <button onClick={closeFunction}>X</button>
      {children}
      
    </div>
  </div>
  )
}
