import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import MainContainer from '../../client/src/components/main/main-container.jsx'
import SmallTitle from '../../client/src/components/small-title.jsx'
import Image from '../../client/src/components/image.jsx'
import Description from '../../client/src/components/description.jsx'

describe("<MainContainer />", () => {

  it("renders a <SmallTitle title={this.props.action}/> component", () => {
    expect(shallow(<MainContainer />).contains(<SmallTitle title={this.props.action}/>)).to.equal(true);
  })
  
  it("renders a <Image className='main-image' src={ this.props.src } /> component", () => {
    expect(shallow(<MainContainer />).contains(<Image className='main-image' src={ this.props.src } />)).to.equal(true);
  })

  it("renders a <Description text='This action is eating ice cream.' /> component", () => {
    expect(shallow(<MainContainer />).contains(<Description text='This action is eating ice cream.' />)).to.equal(true);
  })
})