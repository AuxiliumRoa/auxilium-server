import React, { Component } from 'react'
import { Image } from 'react-bootstrap' 
import BigTitle from '../big-title.jsx'

class Hero extends Component {

  render() {
    return (
      <div className='heroTitle'>
        <Image id='logo' src='/css/aux-img-white.png' responsive />
        <BigTitle name='Auxilium' />
      </div>
     )
  }

}

export default Hero
