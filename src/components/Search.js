import { InputBase,Box,styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useGlobalContext} from "../Context/Context.js";

const SearchContainer = styled(Box)`
    background: rgb(238, 236, 236);
    width:38%;
    border-radius:2px;
    margin-left:12%;
    display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding:5px;
`

const Search = () => {

  const {search,setSearch} = useGlobalContext();

  function handleSearch(e){
    setSearch(e.target.value);
  }
  
  function handleForm(e){
    e.preventDefault()
   }

  return (
    <SearchContainer onSubmit={handleForm} >
        <InputSearchBase
        value={search} onChange={handleSearch}
        placeholder='Search for products, brands and more'
        />
        <SearchIconWrapper>
          <SearchIcon/>
        </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search