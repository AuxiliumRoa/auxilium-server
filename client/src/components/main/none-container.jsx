import React, { Component } from 'react'
import BigTitle from '../big-title.jsx'
import SmallTitle from '../small-title.jsx'

class NoneContainer extends Component {
  render() {
    return (
      <div className='none-container'>
        <BigTitle name="Good job! You've joined all the things!" />
        <SmallTitle id='none-container-text' title='Click the icon in the top right corner to view the causes you have joined' />
      </div>
    )
  }
}

export default NoneContainer