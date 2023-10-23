import React, { useEffect, useState } from 'react'
// import Header from './Header'
import HeaderForCart from "./HeaderForCart.js";
import './Cartstyle.css';
import { useGlobalContext } from '../Context/Context.js';
import audio from '../btnsound.wav';
import { ToastContainer,toast } from 'react-toastify';
import { Button } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const CartPage = () => {

  const {cartItems,setCartItems} = useGlobalContext();
  const[totalPrice,setTotalPrice] = useState(0);

  const checkoutHandler = async (totalPrice)=>{
    const {data:{key}} = await axios.get("http://www.localhost:4000/api/getkey")
    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
      totalPrice
    })
    
    const options = {
      key,
      amount: order.totalPrice,
      currency: "INR",
      name: "ZipKart",
      description: "Happy Shopping",
      image: "data:image/png;base64,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",
      order_id: order.id,
      // callback_url: "http://localhost:4000/api/paymentverification",
      prefill:{
        name: "Gaurav Kumar",
        email: "abc123@gmail.com",
        contact: "1234567890"
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color" : "#6739b7"
      }
    };
    const razor = new window.Razorpay(options);
      razor.open();
      
    // if(razor.open()){
    //   return {
    //     ...cartItems,
    //     cartItems:[],
    //   }
    // }

  
    // console.log(data)
  }

  const handleChange = (item, d) => {
    new Audio(audio).play();
    const ind = cartItems.indexOf(item);
    const arr = cartItems;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCartItems([...arr]);
  };


  const  handlePrice= () => {
    let ans = 0;
    cartItems.map((item) => (ans += item.quantity * item.price));
    setTotalPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  

  function handleDelete(data) {
    new Audio(audio).play();
    toast.success("Removed Successfully!",{
      position:"top-center",
      autoClose:1000
    });
    
    
      setTimeout(()=>{
        const newCartItems = cartItems.filter(item => item.id !== data.id)
        setCartItems([...newCartItems])
        localStorage.setItem('datas', JSON.stringify([...newCartItems]))
      },2000)
   

    
  }

  return (
    <>
    <HeaderForCart/>
    
    
    {cartItems.length === 0 ? (
                <div style={{textAlign:"center",marginTop:"12rem"}}>
                <h1 className="emptyCart">Cart is Empty!</h1><br/>
                <img style={{width:"300px"}}
                src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='cartEmpty' />
                </div>
                
            ) : (

    <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {cartItems.length} items</h5>
          </div>
          <div className="card-body"  >
            {/* <!-- Single item --> */}
            
            {cartItems.map((item) => {
                        return (
            <div className="row" key={item.id} style={{marginBottom:"2rem"}} >
              {/* <hr className="my-4" /> */}
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {/* <!-- Image --> */}
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={item.image}
                    className="w-100" alt={item.title} />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
                {/* <!-- Image --> */}
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Data --> */}
                <p><strong>{item.title}</strong></p>
                <p>{item.disc}</p>
               
                {/* <button
                onClick={handleDelete()} 
                type="button" className="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash"></i>
                </button> */}
                <Button onClick={() => handleDelete(item)} variant="outlined" color='error'>Remove</Button>

                <ToastContainer/>
                {/* <!-- Data --> */}
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Quantity --> */}
                <div className="d-flex mb-4" style={{maxWidth: "300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <button className="btn btn-primary px-3 me-2"
                  style={{height:"3rem",borderRadius:"50%"}}
                    onClick={() => handleChange(item, -1)}>
                    <i className="fas fa-minus"></i>
                  </button>

                    <p style={{display:"flex",justifyContent:"center",alignContent:"center",width:"2rem",marginTop:"1rem",fontSize:"1.2rem"}}>{item.quantity}</p>

                  <button className="btn btn-primary px-3 ms-2"
                  style={{height:"3rem",borderRadius:"50%"}}
                    onClick={() => handleChange(item, 1)}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                {/* <!-- Quantity --> */}

                {/* <!-- Price --> */}
                <p className="text-start text-md-center">
                  <strong>Rs.{item.price}</strong>
                </p>
               {/* Price  */}
              </div>
              <hr className="my-4" />
            </div>
            // single end
            );
          })}
            {/* <hr className="my-4" /> */}
          </div>
        </div>
        
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                </div>
                <span><strong>Rs.{totalPrice}</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-success btn-lg btn-block"
            onClick={()=>checkoutHandler(totalPrice)}
            >
              Pay Now
            </button>

            {/* payment info */}
            <div className="card-body" style={{textAlign:"center"}}>
            <p><strong>We accept</strong></p>
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
          </div>
            {/* payment info end */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)}
    </>
  )
}

export default CartPage