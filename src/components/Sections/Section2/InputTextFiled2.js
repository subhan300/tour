import React,{useState}from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '16ch',
  
  },
}));

export default function InputTextField2() {
  let[value,newValue]=useState(1);
  let[Pvalue,setPValue]=useState(1)
  const classes = useStyles();
  const [values, setValues] = React.useState({
   
    weight: '',
    weightRange: '',
  
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  

  return (
<>


<div style={{display:"flex",paddingTop:"17px"}}>
   
          
   <div>
       <p style={{color:"gray"}}>Pickup Date</p>
       <input placeholder=" 22 APRIL " style={{width:"78%",border:"1px solid lightgray",paddingLeft:"3px",padding:"10px"}}></input>
   </div>
   <div>
       <p style={{color:"gray"}}>Pickup Time</p>
       <input placeholder=" 12:30PM" style={{width:"78%",border:"1px solid lightgray",paddingLeft:"3px",padding:"10px"}}></input>
   </div>


   


</div>
<div style={{display:"flex",paddingTop:"17px",justifyContent:"space-evenly"}}>
   
          
   <div >
       <p style={{color:"gray",fontSize:"15px"}}>PASSANGERS</p>
  <div  style={{flex:.6,border:"1px solid lightgray",padding:"10px",display:"flex",justifyContent:"space-between"}}>
    
    
    <AddIcon  style={{color:"lightgray"}} onClick={()=>{newValue(++value)}} />
    <span>{value}</span>
    <RemoveIcon style={{color:"lightgray"}}  onClick={()=>{newValue(--value)}} /></div>
   </div>
  
  
  
  
  
  
   <div >
       <p style={{color:"gray",fontSize:"15px"}}>LUGGAGE PIECES</p>
       <div  style={{flex:.5,border:"1px solid lightgray",padding:"10px",display:"flex",justifyContent:"space-between"}}>
           < div><AddIcon style={{color:"lightgray"}} onClick={()=>{setPValue(++value)}} /></div>
            <div> <span>{Pvalue}</span></div>
           <div>
           <RemoveIcon style={{color:"lightgray"}} onClick={()=>{setPValue(--Pvalue)}} />
          </div>
       </div>
    
</div>


   


</div>
<br></br>

<Button variant="contained" color="secondary" style={{backgroundColor:'#A5F0CD',width:"70%",padding:"10px"}}>
Continue
</Button>



</>

    

        
     
  
  );
}
