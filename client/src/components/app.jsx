import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <Grid className='main'>
        { this.props.children }
      </Grid>
      </div>
    )
  }
}

export default App

