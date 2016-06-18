import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';


import ChatContent from '../src/components/actionsInfoChat/action-chat.jsx'


describe("<ChatContent />", () => {

  it("renders a <p></p> component", () => {
    expect(shallow(<ChatContent />).contains(<p></p>)).to.equal(true);
  })
})