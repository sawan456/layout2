import React, { useContext, useState } from "react";
import Data from "../components/Data/data.js"

const AppContext = React.createContext();

const AppProvider = ({children})=>{

    const localCartItems = JSON.parse(localStorage.getItem('datas'));
    const [items,setItems] = useState(Data);
    const [cartItems,setCartItems] = useState(localCartItems || []);
    const [search,setSearch] = useState('');

    return <AppContext.Provider value={{cartItems, setCartItems ,items ,setItems, search ,setSearch}} >{children}</AppContext.Provider>;
};

const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppContext,AppProvider,useGlobalContext};