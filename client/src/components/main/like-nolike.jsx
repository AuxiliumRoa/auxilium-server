import React, { Component } from 'react'
import Button from '../button.jsx'

class LikeNoLike extends Component {
  render() {
    return (
    	<div>
	      <Button label='No Like' handleClick={ this.props.nolike } />
        <Button label='Like' handleClick={ this.props.like } />
      </div>
      )
  }
}

export default LikeNoLike