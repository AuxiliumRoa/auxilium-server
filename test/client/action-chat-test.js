import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';


import ActionChat from '../src/components/actionsInfoChat/action-chat.jsx'
import Image from '../src/components/image.jsx'
import ChatContent from '../src/components/actionsInfoChat/chat-content.jsx'

describe("<ActionChat />", () => {

  it("renders a <Image /> component", () => {
    expect(shallow(<ActionChat />).contains(<Image />)).to.equal(true)
  })

  it("renders a <ChatContent /> component", () => {
    expect(shallow(<ActionChat />).contains(<ChatContent />)).to.equal(true)
  })
})