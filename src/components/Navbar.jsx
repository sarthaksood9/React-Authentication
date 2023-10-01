import React from 'react'

const Navbar = () => {
  return (
    <div>
      <p>download kero</p>
      <a href='https://mrcet.com/downloads/digital_notes/CSE/III%20Year/COMPUTER%20NETWORKS%20NOTES.pdf' download="test_file.pdf" >click kero</a>
      {/* <a href='src\Leadership Coaching V2[708].pdf' download="test_file.pdf" >click kero</a> */}
      <a href="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.pdf"
        Download="test_image">
        <button type="button"> Download </button>
      </a>
      <div className='flex'>
        <div className='div-1'></div>
        <div className='div-2'></div>
      </div>
    </div>
  )
}

export default Navbar