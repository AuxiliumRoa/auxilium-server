import React, { Component } from 'react'
import MainContainer from './main-container.jsx'
import IconBox from '../icon-box.jsx'
import LikeNoLike from './like-nolike.jsx'

const iconsArray = [1, 2, 3]

class MainPage extends Component {
  render() {
    return (
      <div>
        <IconBox id='main-nav' icons={ iconsArray } />
        <MainContainer />
        <LikeNoLike />
      </div>
      )
  }
}

export default MainPage