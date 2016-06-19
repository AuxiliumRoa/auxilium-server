import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';


import ActionChat from '../../client/src/components/actions_info_chat/action-chat.jsx'
import Image from '../../client/src/components/image.jsx'
import ChatContent from '../../client/src/components/actions_info_chat/chat-content.jsx'

describe("<ActionChat />", () => {

  it("renders a <Image /> component", () => {
    expect(shallow(<ActionChat />).contains(<Image />)).to.equal(true)
  })

  it("renders a <ChatContent /> component", () => {
    expect(shallow(<ActionChat />).contains(<ChatContent />)).to.equal(true)
  })
})