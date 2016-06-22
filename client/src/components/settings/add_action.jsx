import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import { Button, Row, Col, FormGroup, ControlLabel, FormControl, Panel } from 'react-bootstrap'
import { Link } from 'react-router'
import { RouteTransition } from 'react-router-transition'

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

  handleSubmit(e) {
    e.preventDefault()
    let formData = {
      image_url: ReactDOM.findDOMNode(this.refs['image_url']).value,
      title: ReactDOM.findDOMNode(this.refs['title']).value,
      what: ReactDOM.findDOMNode(this.refs['what']).value,
      when: ReactDOM.findDOMNode(this.refs['when']).value,
      where: ReactDOM.findDOMNode(this.refs['where']).value,
      who: ReactDOM.findDOMNode(this.refs['who']).value,
      why: ReactDOM.findDOMNode(this.refs['why']).value
    }
    this.props.addActionFromClient(formData)
    this.clearForm()
    this.context.router.push('/')
    this.props.setNavIcons('settings', 'joinedList')

  }

  clearForm() {
    ReactDOM.findDOMNode(this.refs['image_url']).value = '',
    ReactDOM.findDOMNode(this.refs['title']).value = '',
    ReactDOM.findDOMNode(this.refs['what']).value = '',
    ReactDOM.findDOMNode(this.refs['when']).value = '',
    ReactDOM.findDOMNode(this.refs['where']).value = '',
    ReactDOM.findDOMNode(this.refs['who']).value = '',
    ReactDOM.findDOMNode(this.refs['why']).value = ''
  }

  render() {
    return (
      <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ translateX: -100 }}
            atLeave={{ translateX: 100 }}
            atActive={{ translateX: 0 }}
            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
            >
        <div className='paddingtop'>
          <Row className=''>
            <Col sm={12}>
              <Panel>
                <h1>Add Action</h1>
                <form onSubmit={ this.handleSubmit.bind(this)} >
                  <FormGroup controlId="formControlsText">
                    <ControlLabel>Title</ControlLabel>
                    <FormControl type="text" placeholder="Please enter title" ref="title"/>
                  </FormGroup>            
                  <FormGroup controlId="formControlsUrl">
                    <ControlLabel>Image Url</ControlLabel>
                    <FormControl type="text" placeholder="Please enter image URL" ref="image_url" />
                  </FormGroup>            
                  <FormGroup controlId="formControlsText">
                    <ControlLabel>Who</ControlLabel>
                    <FormControl type="text" placeholder="Please enter who you are" ref="who"/>
                  </FormGroup>            
                  <FormGroup controlId="formControlsText">
                    <ControlLabel>What</ControlLabel>
                    <FormControl type="text" placeholder="Please enter what you are doing" ref="what"/>
                  </FormGroup>            
                  <FormGroup controlId="formControlsText">
                    <ControlLabel>Where</ControlLabel>
                    <FormControl type="text" placeholder="Please enter where the volunteer event will be" ref="where"/>
                  </FormGroup>            
                  <FormGroup controlId="formControlsText">
                    <ControlLabel>Date</ControlLabel>
                    <FormControl type="text" placeholder="Please enter the date of the event" ref="when"/>
                  </FormGroup>            
                  <FormGroup controlId="formControlsText">
                    <ControlLabel>Why</ControlLabel>
                    <FormControl type="text" placeholder="Please enter why you are seeking volunteers" ref="why"/>
                  </FormGroup>
                  <FormGroup controlId="formControlsEmail">
                    <ControlLabel>Email address</ControlLabel>
                    <FormControl type="email" placeholder="Enter email" />
                  </FormGroup>
                  <FormGroup controlId="formControlsSubmit">
                    <ControlLabel></ControlLabel>
                    <FormControl type="submit" />
                  </FormGroup>
                </form>
              </Panel>
            </Col>
          </Row>
        </div>
      </RouteTransition>
      )
  }
}

AddAction.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    userName: state.user ? state.user.name : 'Guest',
  }
}

export const AddActionContainer = connect(
  mapStateToProps,
  actionCreators
)(AddAction)