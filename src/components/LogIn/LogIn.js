import React from 'react'
import LogHead from './LogHead.js'
import LogMain from './LogMain.js'
import LogFoot from './LogFoot.js'
import {auth,provider} from "./firebase.js";
import { actionTypes } from '../../src/Components/components/reducer.jsx'
import { useStateValue } from '../StateProvider.jsx'


const LogIn = () => {

    const [state,dispatch] = useStateValue();

    const signIn = ()=>{
        // sign in..
        auth.signInWithPopup(provider)
        .then((result)=>{
            // console.log(result.user);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

  return (
    <div>
  {/* <div className="force-overflow"></div> */}
    
        <LogHead/>
        <LogMain signIn={signIn} />
        <LogFoot/>
    
</div>
  )
}

export default LogIn