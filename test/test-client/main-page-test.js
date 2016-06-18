import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import MainPage from '../../src/components/main/main-page.jsx'
import IconBox from '../../src/components/icon-box.jsx'
import MainContainer from '../../src/components/main/main-container.jsx'
import LikeNoLike from '../../src/components/main/like-nolike.jsx'

describe("<MainPage />", () => {

  it("renders a <IconBox /> component", () => {
    expect(shallow(<MainPage />).contains(<IconBox />)).to.equal(true)
  })

  it("renders a <MainContainer /> component", () => {
    expect(shallow(<MainPage />).contains(<MainContainer />)).to.equal(true)
  })
  
  it("renders a <LikeNoLike /> component", () => {
    expect(shallow(<MainPage />).contains(<LikeNoLike />)).to.equal(true)
  })
})
