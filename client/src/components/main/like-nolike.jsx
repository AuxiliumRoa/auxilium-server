import React, { Component } from 'react'
import Button from '../button.jsx'

class LikeNoLike extends Component {
  render() {
    return (
    	<div>
	      <Button label='No Like'/>
        <Button label='Like'/>
      </div>
      )
  }
}

export default LikeNoLike