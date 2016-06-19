import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import LikeNoLike from '../../client/src/components/main/like-nolike.jsx'
import Button from '../../client/src/components/button.jsx'

describe("<LikeNoLike />", () => {

  it("renders a <Button label='No Like'/> component", () => {
    expect(shallow(<LikeNoLike />).contains(<Button label='No Like'/>)).to.equal(true);
  })

  it("renders a <Button label='Like'/> component", () => {
	  expect(shallow(<LikeNoLike />).contains(<Button label='Like'/>)).to.equal(true);
  })
})