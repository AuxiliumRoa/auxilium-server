import React, { Component } from 'react'

class Description extends Component {
  render() {
    return (
    	<p>
        {
          this.props.spans.map((span, i) => {
            return <span key={ i } className={ span.className }>{ span.text }</span>
          })
        }
      </p>
    )
  }
}

export default Description