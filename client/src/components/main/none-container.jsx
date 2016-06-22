import React, { Component } from 'react'
import BigTitle from '../big-title.jsx'
import SmallTitle from '../small-title.jsx'
import { Panel } from 'react-bootstrap'


class NoneContainer extends Component {
  render() {
    return (
      <Panel>
        <div className='none-container'>
          <BigTitle name="Good job! You've joined all the things!" />
          <SmallTitle id='none-container-text' title='Click the icon in the top right corner to view the actions you have joined' />
        </div>
      </Panel>
    )
  }
}

export default NoneContainer