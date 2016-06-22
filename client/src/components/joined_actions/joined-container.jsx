import React, { Component } from 'react'

import ActionBox from './action-box.jsx'
import MediumTitle from '../medium-title.jsx'
import { Panel, Media } from 'react-bootstrap'

class JoinedContainer extends Component {

  render() {
    return (
    <div>
          <MediumTitle title='Actions you have joined:' />
          {
            (Object.keys(this.props.actions).length > 0)
              ? Object.keys(this.props.actions).map((key, i) => {
                return <ActionBox 
                  key={ i }
                  id={ this.props.actions[key].id }
                  src={ this.props.actions[key].image_url }
                  title={ this.props.actions[key].title }
                  who={ this.props.actions[key].who }
                  setDisplay={ this.props.setDisplay }
                  setNav={ this.props.setNav }
                  unjoinAction={ this.props.unjoinAction } />
              })
              : <Panel><h1>You haven't joined any actions yet. Get to it!</h1></Panel>
            }
      </div>
      )
  }
}

export default JoinedContainer