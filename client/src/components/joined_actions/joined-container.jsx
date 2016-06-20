import React, { Component } from 'react'

import ActionBox from './action-box.jsx'
import SmallTitle from '../small-title.jsx'

class JoinedContainer extends Component {
  render() {
    console.log('JOINED ACTIONS', this.props.actions)
    return (
      <div>
        <SmallTitle title='Actions you have joined:' />
        {
          Object.keys(this.props.actions).map((key) => {
            return <ActionBox 
              src={ this.props.actions[key].image_url }
              title={ this.props.actions[key].title }
              who={ this.props.actions[key].who }
              where={ this.props.actions[key].where }
              when={ this.props.actions[key].when }
              what={ this.props.actions[key].what} />
          })
        }
      </div>
      )
  }
}

export default JoinedContainer