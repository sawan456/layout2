import React from 'react'
import { useParams } from 'react-router-dom';
import Data from "../components/Data/data.js";
import { Link } from 'react-router-dom';
import Header from './Header.js';
import { Button, styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel'

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import audio from '../btnsound.wav'
import { useGlobalContext } from '../Context/Context.js';
import HeaderForCart from './HeaderForCart.js';


const ProductDetail = () => {
  const {cartItems,setCartItems} = useGlobalContext();
  // const diffToast = ()=>{
  //   new Audio(audio).play();
  //   toast.success("Added Successfully!",{
  //     position:"top-center",
  //     autoClose:1000
  //   });
  // }
  // position='top-center'
  // autoClose={5000}
  // hideProgressBar={false}
  // newestOnTop={false}
  // closeOnClick
  // rtl={false}
  // pauseOnFocusLoss
  // draggable
  // pauseOnHover
    const { id } = useParams()
    const clickedItem = Data.find(item => item.id === Number(id))

    function abc(cartData) {

      function Exists(){
        new Audio(audio).play();
        toast.error("Already Added!",{
          position:"top-center",
          autoClose:1000
        });
      }
      
        if(cartItems.indexOf(cartData) !== -1) 
        return   Exists();
        new Audio(audio).play();
      toast.success("Added Successfully!",{
        position:"top-center",
        autoClose:1000
      });
        setCartItems([...cartItems, cartData])
        localStorage.setItem('datas', JSON.stringify([...cartItems, cartData]))
      // }
    }

  return (
    <>
    <HeaderForCart/>
    
      <div className="mainDaba" style={{display:"flex",justifyContent:"center",alignItems:"center",
      gap:"4rem"
      ,marginTop:"11rem"}}>

        {/* <div className="imgDaba" style={{border:".1rem solid black"}}>
          <img src={clickedItem.image} alt="" style={{width:"200px",height:"300px"}}/>
          <img src={clickedItem.image} alt="" style={{width:"200px",height:"300px"}} /><br/>
          <img src={clickedItem.image} alt="" style={{width:"200px",height:"300px"}} />
          <img src={clickedItem.image} alt="" style={{width:"200px",height:"300px"}} /> 
        </div> */}
        <img src={clickedItem.image} alt="" style={{width:"200px",height:"300px",marginLeft:"8rem"}}/>
        
        <div className="detailDaba" style={{marginRight:"6rem"}} >
          <h3>{clickedItem.title}</h3>
          <p style={{fontStyle:"italic"}}><strong>Description:</strong><br/>{clickedItem.disc}</p>
          <h4>Rs. {clickedItem.price}</h4>
          
          <Button onClick={() => abc(clickedItem)} variant="outlined" color="success">Add to Cart</Button>
          <ToastContainer/>
        </div>
      </div>
    </>
  )
}

export default ProductDetail