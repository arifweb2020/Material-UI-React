import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { HeadingColor } from './GlobalStyle';
import { MainDiv } from './GlobalStyle';
import Card from './components/Card'


function App(props) {
  return (
  
    <div>
      <GlobalStyle/>
      <HeadingColor>MUI</HeadingColor>
      <MainDiv>
        <h2>Welcome</h2>
        <div className="innerDiv">
        <h3>inner div</h3>
        </div>
        </MainDiv>
        <Card/>
    </div>
  );
}

export default App;
