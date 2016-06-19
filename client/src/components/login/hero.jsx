import React, { Component } from 'react'
import Image from '../image.jsx'
import BigTitle from '../big-title.jsx'

class Hero extends Component {

  render() {
    return (
      <div>
        <Image id='logo' />
        <BigTitle name='Auxilium' />
      </div>
     )
  }

}

export default Hero
