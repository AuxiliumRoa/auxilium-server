import React, { Component } from 'react'
import Icon from './icon.jsx'

class IconBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let login = this.props.login
    return (
      <div id={ this.props.id }>
      {
        this.props.icons.map(function(e) {
          return <Icon icon={ e.icon } login={ login } provider={ e.provider }/>
        })
      }
      </div>
      )
  }
}

export default IconBox
