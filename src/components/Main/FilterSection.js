import React from 'react'
import {AppBar,Toolbar,styled,Box,Button} from '@mui/material'
import './btnfilter.css';
import { useGlobalContext } from '../../Context/Context';
import Data from "../Data/data.js";


const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 5%;
`

const FilterSection = () => {

  const {setItems} = useGlobalContext();

  const genderCategory = (e) => {
        
    if (e.target.value === "All") {
      setItems(Data)
    }
    else{
      setItems(Data.filter((ele) => {
        return ele.category === e.target.value;
      }))
    }
  }

  return (
    <div>
        <Toolbar style={{display:"flex",justifyContent:"center"}}>
          <CustomButtonWrapper className='btnfilter'>
            <Button value="All" onClick={genderCategory}>All</Button>
            <Button value="Cloths" onClick={genderCategory}>Cloths</Button>
            <Button value="Mobiles" onClick={genderCategory}>Mobiles</Button>
            <Button value="Laptops" onClick={genderCategory}>Laptops</Button>
            <Button value="Tablets" onClick={genderCategory}>Tablets</Button>
            <Button value="Books" onClick={genderCategory}>Books</Button>
          </CustomButtonWrapper>
        </Toolbar>
        </div>
    
  )
}

export default FilterSection