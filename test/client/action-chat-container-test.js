import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ActionChatContainer from '../src/components/actionsInfoChat/action-chat-container.jsx'
import SmallTitle from '../src/components/small-title.jsx'
import ActionChat from '../src/components/actionsInfoChat/action-chat.jsx'

describe("<ActionChatContainer />", () => {

  it("renders a <SmallTitle /> component", () => {
    expect(shallow(<ActionChatContainer />).contains(<SmallTitle />)).to.equal(true);
  })

  it("renders a <ActionChat /> component", () => {
    expect(shallow(<ActionChatContainer />).contains(<ActionChat />)).to.equal(true);
  })
})