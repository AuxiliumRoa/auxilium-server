import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';


import ChatContent from '../../client/src/components/actions_info_chat/action-chat.jsx'


describe("<ChatContent />", () => {

  it("renders a <p></p> component", () => {
    expect(shallow(<ChatContent />).contains(<p></p>)).to.equal(true);
  })
})