import React, { Component } from 'react'
import { Row, Button, Navbar, Nav } from 'react-bootstrap'

class LikeNoLike extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navbar className='likenolike' fixedBottom>
        <Nav>
          <Row className='btnRow'>
            <Button bsStyle="warning" className='btn btn-default' onClick={ this.props.handleClickPass }>PASS</Button> 
            <Button bsStyle="success" className='btn btn-default' onClick={ this.props.handleClickJoin }>JOIN</Button>
          </Row>
        </Nav>  
      </Navbar>
    )
  }
}

export default LikeNoLike