import React, { Component } from 'react'

class Description extends Component {
  render() {
    return (
    	<p>
        {
          this.props.spans.map((span) => {
            return <span className={ span.className }>{ span.text }</span>
          })
        }
      </p>
    )
  }
}

export default Description