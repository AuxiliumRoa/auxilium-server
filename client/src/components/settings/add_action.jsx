import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import IconBox from '../icon-box.jsx'
import { Button, Row, Col, FormGroup, ControlLabel, FormControl, Panel } from 'react-bootstrap'
import { Link } from 'react-router'

const iconArray = [
  {
    icon: 'fa fa-home fa-3x',
    key: 'home',
    link: '/'
  }
]

class AddAction extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row className=''>
        <Col sm={12}>
          <Panel>
            <IconBox id='settings-nav' icons={ iconArray } />
            <h1>Add Action</h1>
            <form>
              <FormGroup controlId="formControlsText">
                <ControlLabel>Title</ControlLabel>
                <FormControl type="text" placeholder="Please enter title" />
              </FormGroup>            
              <FormGroup controlId="formControlsUrl">
                <ControlLabel>Image Url</ControlLabel>
                <FormControl type="text" placeholder="Please enter image URL" />
              </FormGroup>            
              <FormGroup controlId="formControlsText">
                <ControlLabel>Who</ControlLabel>
                <FormControl type="text" placeholder="Please enter who you are" />
              </FormGroup>            
              <FormGroup controlId="formControlsText">
                <ControlLabel>What</ControlLabel>
                <FormControl type="text" placeholder="Please enter what you are doing" />
              </FormGroup>            
              <FormGroup controlId="formControlsText">
                <ControlLabel>Where</ControlLabel>
                <FormControl type="text" placeholder="Please enter where the volunteer event will be" />
              </FormGroup>            
              <FormGroup controlId="formControlsText">
                <ControlLabel>Date</ControlLabel>
                <FormControl type="text" placeholder="Please enter the date of the event" />
              </FormGroup>            
              <FormGroup controlId="formControlsText">
                <ControlLabel>Why</ControlLabel>
                <FormControl type="text" placeholder="Please enter why you are seeking volunteers" />
              </FormGroup>
              <FormGroup controlId="formControlsEmail">
                <ControlLabel>Email address</ControlLabel>
                <FormControl type="email" placeholder="Enter email" />
              </FormGroup>
            </form>
          </Panel>
        </Col>
      </Row>
      )
  }
}

export default AddAction