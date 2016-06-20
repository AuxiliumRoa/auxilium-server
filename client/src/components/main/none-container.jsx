import React, { Component } from 'react'
import BigTitle from '../big-title.jsx'

class NoneContainer extends Component {
  render() {
    return (
      <div className='none-container'>
        <BigTitle name="Good job! You've joined all the available causes." />
        <p id='none-container-text'>Click the icon in the top right corner to view the causes you have joined.</p>
      </div>
    )
  }
}

export default NoneContainer