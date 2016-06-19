import { Component } from 'react'
import Icon from './icon.jsx'

class IconBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id={ this.props.id }>
      {
        this.props.icons.map((icon) => {
          return <Icon icon={ icon.icon } provider={ icon.provider }/>
        })
      }
      </div>
    )
  }

}

export default IconBox
