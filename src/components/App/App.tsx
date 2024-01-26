import React from 'react';
import { StyledApp } from './Styled';
import Footer from '../Common_Parts/Footer';
import Header from '../Common_Parts/Header';
import Content from '../Common_Parts/Content';

function Template() {
  return(
    <div>
      Im content
    </div>
  )
}
function App() {
  return (
    <StyledApp>
      <Header />
      <Content >
        <Template />
      </Content>  
      <Footer />
    </StyledApp>
  );
}

export default App;
