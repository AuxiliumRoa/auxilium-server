import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import MainContainer from '../../src/components/main/main-container.jsx'
import SmallTitle from '../../src/components/small-title.jsx'
import Image from '../../src/components/image.jsx'
import Description from '../../src/components/description.jsx'

describe("<MainContainer />", () => {

  it("renders a <SmallTitle /> component", () => {
    expect(shallow(<MainContainer />).contains(<SmallTitle />)).to.equal(true);
  })
  
  it("renders a <Image /> component", () => {
    expect(shallow(<MainContainer />).contains(<Image />)).to.equal(true);
  })

  it("renders a <Description /> component", () => {
    expect(shallow(<MainContainer />).contains(<Description />)).to.equal(true);
  })
})