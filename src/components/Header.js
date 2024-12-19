import React from 'react'
import trollFace from '../images/troll-face.jpg'

const Header = () => {
  return (
    <header className="Header">
      <figure className='imagediv'>
        <img src={trollFace} alt='troll-face' />
      </figure>
      <p>Meme Generator</p>
   </header>
  )
}

export default Header