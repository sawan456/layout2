import React, { useState } from 'react'
import "./Style/LogMain.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../MyApp';
import Header from '../Header';
import { Box } from '@mui/material';
import Main from '../Main/Main';
import Footer from '../Footer';

const LogMain = ({signIn}) => {

  // const {setLog} = useGlobalContext();

  const history = useNavigate();
  
  const[inpval,setInpval] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });

  const[data,setData] = useState([]);
  console.log(inpval);

  // let name,value;

  const handleInputs = (e)=>{
    // console.log(e);
    // name = e.target.name;
    // value = e.target.value;

    // setUser({...user, [name]:value});
    const {value,name} = e.target;
    // console.log(value,name);
    setInpval(()=>{
      return{
        ...inpval,
        [name]:value
      }
    })
  }

  const addData=(e)=>{
    e.preventDefault();
    // console.log(inpval);
    
    const {firstName,lastName,email,password} = inpval;

    if(firstName === ""){
      toast.error("firstName is required");
    }
    else if(lastName === ""){
      toast.error("lastName is required");
    }
    else if(!email.includes("@")){
      toast.error("enter valid email");
    }
    else if(password.length < 5){
      toast.error("Password should be more than 5 length");
    }
    else{
      toast.success("Redirecting to Home");
      localStorage.getItem("userdetails",JSON.stringify([...data,inpval]));
      // history("/")
      // setLog(<>
        // <Header/>
        // <Box style={{marginTop: "84px"}} >
        //   <Main/>
        // </Box>
        // <Footer/>
        // </>)
    }


  }

  return (
    <div style={{backgroundColor:"#F3F3F3"}}>
<section className="background-radial-gradient overflow-hidden">
 

  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(113, 45%, 45%)"}}>
          Welcome!<br />
          {/* <span style={{color: "black"}}>to</span><br/> */}
          <span style={{color: "black"}}>To <span style={{backgroundColor:"black"}}><span style={{color:"red"}}>Zip</span><span style={{color:"white"}}>Kart</span></span> ...</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: "#484b6f"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div >
                    <input 
                    name='firstName'
                    // value={user.firstName}
                    onChange={handleInputs}
                    type="text" id="form3Example1" className="form-control" placeholder='First name' style={{color:"black"}} required/>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div >
                    <input 
                    name='lastName'
                    // value={user.lastName}
                    onChange={handleInputs}
                    type="text" id="form3Example2" className="form-control" placeholder='Last name' required/>
                  </div>
                </div>
              </div>

              <div className=" mb-4">
                <input 
                name='email'
                // value={user.email}
                onChange={handleInputs}
                type="email" id="form3Example3" className="form-control" placeholder='Email address' required/>
              </div>

             
              <div className=" mb-4">
                <input 
                name='password'
                // value={user.password}
                onChange={handleInputs}
                type="password" id="form3Example4" className="form-control" placeholder='Password' required/>
              </div>

            
              <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"  required/>
                <label className="form-check-label" for="form2Example33">
                  I am Human!
                </label>
              </div>

             
              <button
              onClick={addData} 
              // onSubmit={(e)=>e.preventDefault()}
               type="submit" className="btn btn-primary btn-block mb-4" style={{backgroundColor:"red",display:"flex",justifyContent:"center",textAlign:"center"}}>
                Sign up
              </button>
              <ToastContainer/>

              
              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1"
                onClick={signIn}
                >
                  <i className="fab fa-facebook-f" style={{backgroundColor:"#555ed4",color:"white",borderRadius:"50%"}}></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1"
                onClick={signIn}
                >
                  <i className="fab fa-google" style={{color:"orange",backgroundColor:"#f4eff1",borderRadius:"50%"}} ></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1"
                onClick={signIn}
                >
                  <i className="fab fa-twitter" style={{color:"#335ce3",backgroundColor:"#ebedf2",borderRadius:"50%"}}></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1"
                onClick={signIn}
                >
                  <i className="fab fa-github" style={{color:"white",backgroundColor:"#3a3a3a",borderRadius:"50%"}}></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default LogMain