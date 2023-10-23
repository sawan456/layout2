import React, { useState,useContext } from 'react'
import Header from './components/Header'
import Main from './components/Main/Main'
import {Box} from '@mui/material';
import Footer from './components/Footer';
import LogIn from './components/LogIn/LogIn';
import { useStateValue } from './components/StateProvider';

const AppContext = React.createContext();

const MyApp = ({children}) => {
  // const [{user},setUser] = useStateValue();
  // const [log,setLog] = useState(<LogIn/>)

  return (
    <div>  

        <Header/>
        <Box style={{marginTop: "84px"}} >
          <Main/>
        </Box>
        <Footer/>
      
      {/* {!user ? log :
        
        setLog(
          <>
        
        </>
        )
        
        }
        
        <AppContext.Provider value={{log,setLog}} >{children}</AppContext.Provider>; */}
    </div>
  )
}
// const useGlobalContext = ()=>{
//   return useContext(AppContext);
// };

// export {AppContext,useGlobalContext};
export default MyApp