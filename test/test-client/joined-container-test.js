import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import JoinedContainer from '../../client/src/components/joined_actions/joined-container.jsx'
import SmallTitle from '../../client/src/components/small-title.jsx'

describe("<JoinedContainer />", () => {

  it("renders a <SmallTitle title='Actions you have joined:' /> component", () => {
    expect(shallow(<JoinedContainer />).contains(<SmallTitle title='Actions you have joined:' />)).to.equal(true);
  })
})