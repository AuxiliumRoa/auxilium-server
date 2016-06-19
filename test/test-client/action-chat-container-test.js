import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ActionChatContainer from '../../client/src/components/actions_info_chat/action-chat-container.jsx'
import SmallTitle from '../../client/src/components/small-title.jsx'
import ActionChat from '../../client/src/components/actions_info_chat/action-chat.jsx'

describe("<ActionChatContainer />", () => {

  it("renders a <SmallTitle /> component", () => {
    expect(shallow(<ActionChatContainer />).contains(<SmallTitle />)).to.equal(true);
  })

  it("renders a <ActionChat /> component", () => {
    expect(shallow(<ActionChatContainer />).contains(<ActionChat />)).to.equal(true);
  })
})