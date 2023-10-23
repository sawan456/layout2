import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Data from "../Data/data.js";
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/Context.js';

export default function ActionAreaCard() {
  
  const {items,search} = useGlobalContext();

  return (<>
    {
        items.map((val,index)=>{

          if(search == ''){
            return (
    <Link to={`productDetail/${val.id}`} style={{textDecoration: "none",color:"black"}}  key={index} >         
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="450"
            image={val.image}
            alt={val.title}
          />
          <CardContent style={{textAlign:"center"}} >
            <Typography gutterBottom variant="h5" component="div">
              {val.title}
            </Typography>
            <Typography variant="h6" color="red">
              Rs.{val.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
    )
}else if(val.title.toLowerCase().includes(search.toLowerCase())){
  return (
    <Link to={`productDetail/${val.id}`} style={{textDecoration: "none",color:"black"}}  >         
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="450"
            image={val.image}
            alt={val.title}
          />
          <CardContent style={{textAlign:"center"}} >
            <Typography gutterBottom variant="h5" component="div">
              {val.title}
            </Typography>
            <Typography variant="h6" color="red">
              Rs.{val.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
)
    }
  })}
    </>
  );
}