import React, { Component } from 'react'
import Button from '../button.jsx'

class LikeNoLike extends Component {
  render() {
    return (
    	<div>
	      <Button label='No Like' incrementIndex={ this.props.incrementDisplayIndex } />
        <Button label='Like' incrementIndex={ this.props.incrementDisplayIndex } />
      </div>
      )
  }
}

export default LikeNoLike