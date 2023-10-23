import { Avatar, Box ,Button, Typography,styled } from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'
import React from 'react'
import './button.css'
import ResponsiveAppBar from './ResponsiveAppBar'
import ToggleColorMode from './ToggleColorMode.js'
import App from '../App'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context/Context'
import AnimCursor from '../AnimCursor'

const Wrapper = styled(Box)`
    display:flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div{
        margin-right:40px;
        font-size:16px;
        align-items:center;
    }
`

const Container = styled(Box)`
    display: flex;
`

const CustomButtons = () => {

    const {cartItems} = useGlobalContext();

  return (
    <Wrapper>
        <AnimCursor/>
        {/* <Button className='btnLogin' variant='contained' style={{backgroundColor:"red"}} >LogIn</Button> */}
        <ResponsiveAppBar/>
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
        <Container style={{cursor:"pointer",backgroundColor:"white",width:"4rem"}}>
            <ShoppingCart style={{color:"red"}}/>
        <Link to="cart" style={{textDecoration: "none",color:"black"}}  >
            <Typography className='cart'>Cart({cartItems.length})</Typography>
        </Link>
        </Container>
        {/* <ToggleColorMode/> */}
        {/* <App/> */}
    </Wrapper>
  )
}

export default CustomButtons