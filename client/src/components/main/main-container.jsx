import React, { Component } from 'react'
import SmallTitle from '../small-title.jsx'
import Image from '../image.jsx'
import Description from '../description.jsx'

class MainContainer extends Component {
  render() {
    return (
    	<div className='main-container'>
        <SmallTitle title={ this.props.action.title } />
        <Image className='main-image' src={ this.props.action.image_url } />
        <Description text={ 'Who: ' + this.props.action.who } />
        <Description text={ 'What: ' + this.props.action.what } />
        <Description text={ 'Where: ' + this.props.action.where } />
        <Description text={ 'When: ' + this.props.action.when } />
        <Description text={ 'Why: ' + this.props.action.why } />
    	</div>
    )
  }
}

export default MainContainer