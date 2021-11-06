import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins Medium', Poppins SemiBold;
 
 } 
`;


export const HeadingColor = styled.h1`
  color:red;
  font-size:22px;
`;

export const MainDiv = styled.div`
 
      & h2{
     color:darkorange;
 }

& .innerDiv{

    & h3{
        color:brown;
    }
}

`;