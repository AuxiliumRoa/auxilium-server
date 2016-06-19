import React, { Component } from 'react'

import ActionBox from './action-box.jsx'
import SmallTitle from '../small-title.jsx'

class JoinedContainer extends Component {
  render() {
    return (
      <div>
        <SmallTitle title='Actions you have joined:' />
        {
          this.props.actions.map((e) => {
            return <ActionBox text={ e }/>
          })
        }
      </div>
      )
  }
}

export default JoinedContainer