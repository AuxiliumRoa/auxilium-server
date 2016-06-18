import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import IconBox from '../src/components/icon-box.jsx'
import ActionsPage from '../src/components/actionsInfoChat/actions-page.jsx'
import MainContainer from '../src/components/main/main-container.jsx'
import ActionChatContainer from '../src/components/actionsInfoChat/action-chat-container.jsx'

describe("<ActionsPage />", () => {

  it("renders a <IconBox /> component", () => {
    expect(shallow(<ActionsPage />).contains(<IconBox />)).to.equal(true)
  })

  it("renders a <MainContainer /> component", () => {
    expect(shallow(<ActionsPage />).contains(<MainContainer />)).to.equal(true)
  })
  
  it("renders a <ActionChatContainer /> component", () => {
    expect(shallow(<ActionsPage />).contains(<ActionChatContainer />)).to.equal(true)
  })
})
