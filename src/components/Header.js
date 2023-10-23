import React from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material'
import LogoImg from "./img/b.png";
import Search from './Search.js';
import CustomButtons from './CustomButtons.js';
import { Link } from 'react-router-dom';
import AnimCursor from '../AnimCursor';

const StyledHeader = styled(AppBar)`
  background: white;
  height:80px;
`

const Component = styled(Box)`

`

const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 5%;
`

const Header = () => {

  return (
    <StyledHeader>
      <AnimCursor/>
        <Toolbar style={{marginTop: "8px",display:"flex",justifyContent:"space-between"}}>
          <Component>
            <Link to="/">
            <img src={LogoImg} alt='logo' style={{width: "10rem",height:"4rem"}} />
            </Link>
          </Component>
          <Search/>
          <CustomButtonWrapper>
            <CustomButtons/>
          </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header