import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Hero from '../../client/src/components/login/hero.jsx'
import Image from '../../client/src/components/image.jsx'
import BigTitle from '../../client/src/components/big-title.jsx'

describe("<Hero />", () => {

  it("renders a <Image id='logo' /> component", () => {
    expect(shallow(<Hero />).contains(<Image id='logo' />)).to.equal(true);
  })

  it("renders a <BigTitle name='Auxilium' /> component", () => {
    expect(shallow(<Hero />).contains(<BigTitle name='Auxilium' />)).to.equal(true);
  })
})