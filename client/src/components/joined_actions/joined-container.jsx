import React, { Component } from 'react'

import ActionBox from './action-box.jsx'
import SmallTitle from '../small-title.jsx'
import { Panel } from 'react-bootstrap'

class JoinedContainer extends Component {

  render() {
    console.log('JOINED ACTIONS', this.props.actions)
    return (
      <div>
      <Panel>
        <SmallTitle title='Actions you have joined:' />
        {
          (Object.keys(this.props.actions).length > 0)
            ? Object.keys(this.props.actions).map((key) => {
              return <ActionBox 
                id={ this.props.actions[key].id }
                src={ this.props.actions[key].image_url }
                title={ this.props.actions[key].title }
                who={ this.props.actions[key].who }
                where={ this.props.actions[key].where }
                when={ this.props.actions[key].when }
                what={ this.props.actions[key].what} 
                comments={ this.props.actions[key].comments }
                setDisplay={ this.props.setDisplay }
                setNav={ this.props.setNav }
                unjoinAction={ this.props.unjoinAction } />
            })
            : <h1>You haven't joined any actions yet. Get to it!</h1>
          }
        </Panel>
      </div>
      )
  }
}

export default JoinedContainer