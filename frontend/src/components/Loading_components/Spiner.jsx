import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import loading from './image/loading.gif'

const Spiner = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "50vh" }}>
        <img src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt="" />
      </div>
    </>
  )
}

export default Spiner