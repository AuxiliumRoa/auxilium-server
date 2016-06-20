import React, { Component } from 'react'

import SmallTitle from '../small-title.jsx'
import Image from '../image.jsx'
import Description from '../description.jsx'

class MainContainer extends Component {
  render() {
    return (
    	<div className='main-container'>
        <SmallTitle title={ this.props.action.title } />
        <div>
            <Image className='main-image' src={ this.props.action.image_url } />
        </div>
        <Description spans={ [{ className: 'titleSpan', text: 'Who: ' }, { className: 'textSpan', text: this.props.action.who }] } />
        <Description spans={ [{ className: 'titleSpan', text: 'What: ' }, { className: 'textSpan', text: this.props.action.what }] } />
        <Description spans={ [{ className: 'titleSpan', text: 'Where: ' }, { className: 'textSpan', text: this.props.action.where }] } />
        <Description spans={ [{ className: 'titleSpan', text: 'When: ' }, { className: 'textSpan', text: this.props.action.when }] } />
        <Description spans={ [{ className: 'titleSpan', text: 'Why: ' }, { className: 'textSpan', text: this.props.action.why }] } />
    	</div>
    )
  }
}

export default MainContainer