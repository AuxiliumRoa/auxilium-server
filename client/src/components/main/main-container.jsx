import React, { Component } from 'react'

import SmallTitle from '../small-title.jsx'
import Image from '../image.jsx'
import Description from '../description.jsx'

class MainContainer extends Component {
  render() {
    return (
      <div className='main-container'>
        <SmallTitle title={ this.props.title } />
        <Image className='main-image' src={ this.props.src } />
        <Description text='This action is eating ice cream.' />
      </div>
      )
  }
}

export default MainContainer