import React, { Component } from 'react'
import { NavBarContainer } from './nav-bar.jsx'
import { Grid } from 'react-bootstrap'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <Grid className='main'>
          { this.props.children }
        </Grid>
      </div>
    )
  }
}

export default App

