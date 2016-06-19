import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import LoginContainer from '../../client/src/components/login/login-container.jsx'
import SmallTitle from '../../client/src/components/small-title.jsx'
import IconBox from '../../client/src/components/icon-box.jsx'

describe("<LoginContainer />", () => {

  it("renders a <SmallTitle title='Actions you have joined:' /> component", () => {
    expect(shallow(<LoginContainer />).contains(<SmallTitle title='Actions you have joined:' />)).to.equal(true);
  })

  it("renders a <IconBox id='login-icons' icons={ iconArray } login={ this.props.login } /> component", () => {
    expect(shallow(<LoginContainer />).contains(<IconBox id='login-icons' icons={ iconArray } login={ this.props.login } />)).to.equal(true);
  })
})