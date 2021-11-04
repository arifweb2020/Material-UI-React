import styled from "styled-components";

export const AppConatiner = styled.div`
width:100vw;
height:100vh;
background-color:#fff;
overflow-x:hidden;

& h1{
  color:red;
}


@media (max-width: 768px) {
  background: grey;
}
`

export const MyHeader = styled.h2`
color:green;
@media (max-width: 768px) {
    flex-direction: column;
  }
`

