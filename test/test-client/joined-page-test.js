import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import JoinedPage from '../../client/src/components/joined_actions/joined-page.jsx'
import IconBox from '../../client/src/components/icon-box.jsx'
import JoinedContainer from '../../client/src/components/joined_actions/joined-container.jsx'

describe("<JoinedPage />", () => {

  it("renders a <IconBox id='joined-nav' icons={ iconArray }/> component", () => {
    expect(shallow(<JoinedPage />).contains(<IconBox id='joined-nav' icons={ iconArray }/>)).to.equal(true)
  })

  it("renders a <JoinedContainer actions={ joinedActionsArray }/> component", () => {
    expect(shallow(<JoinedPage />).contains(<JoinedContainer actions={ joinedActionsArray }/>)).to.equal(true)
  })
})