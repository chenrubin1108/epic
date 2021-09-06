import React from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
const Container=styled.header`
  & {
      /* display:flex; */
      /* text-align: center; */
      height:60px;
      background:#20232A;
      line-height:60px
      
  }
  & a {
    //   display:inline-block;
      color:white;
      font-size:16px;
      margin: 0 8px;
  }
  & .active {
      color: rgb(97, 218, 251);
  }
`
function Header(){
    return(
    
        <Container>

          <NavLink  exact  to="/">home</NavLink>
          <NavLink  to="/about">about</NavLink>
          <NavLink  to="/mine">mine</NavLink>
          <NavLink  to="/history">history</NavLink>
        </Container>
      
    )
}
export default Header