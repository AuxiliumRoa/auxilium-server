import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import LoginPage from '../../client/src/components/login/login-page.jsx'
import Hero from '../../client/src/components/login/hero.jsx'
import LoginContainer from '../../client/src/components/login/login-container.jsx'

describe("<LoginPage />", () => {

  it("renders a <Hero /> component", () => {
    expect(shallow(<LoginPage />).contains(<Hero />)).to.equal(true)
  })

  it("renders a <LoginContainer /> component", () => {
    expect(shallow(<LoginPage />).contains(<LoginContainer />)).to.equal(true)
  })

  // it("contains spec with an expectation", function() {
  //   expect(shallow(<LoginPage />).is('.LoginPage')).to.equal(true);
  // });

  it("contains a div with a login-container id", function() {
    expect(mount(<LoginContainer />).find('#login-container').length).to.equal(1);
  })
})
