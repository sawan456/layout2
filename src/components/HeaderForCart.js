import React from 'react'
import {AppBar,Toolbar,styled,Box,Typography} from '@mui/material'
import LogoImg from "./img/b.png";
import Search from './Search.js';
import { Link } from 'react-router-dom';
import {ShoppingCart} from '@mui/icons-material'
import { useGlobalContext } from '../Context/Context';
import ResponsiveAppBar from './ResponsiveAppBar';
import AnimCursor from '../AnimCursor';

const StyledHeader = styled(AppBar)`
  background: white;
  height:80px;
`

const Component = styled(Box)`

`
const Container = styled(Box)`
    display: flex;
`

const CustomButtonWrapper = styled(Box)`
display:flex;
margin: 0 3% 0 auto;
& > button, & > p, & > div{
    margin-right:40px;
    font-size:16px;
    align-items:center;
}
`

const HeaderForCart = () => {

    const {cartItems} = useGlobalContext();

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
          <ResponsiveAppBar/>
          <Link to="/cart" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
          <Container style={{cursor:"pointer",backgroundColor:"white",width:"4rem"}}>
            <ShoppingCart style={{color:"red"}}/>
            <Typography className='cart'>Cart({cartItems.length})</Typography>
        </Container>
        </Link>
          </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default HeaderForCart