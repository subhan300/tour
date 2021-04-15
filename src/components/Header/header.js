import React,{useState,useEffect}from 'react'
import Drawer from "../Drawer"
import "./Header.css"
import Header2_mobile from "./Header2_mobile.js"
import Avatar from '@material-ui/core/Avatar';

function Header() {
   const[New,setNew]=useState({matches: window.matchMedia("(max-width: 750px)").matches })
   const[height,setheight]=useState(window.pageYOffset)
   
   useEffect(()=>{
    const handler = e =>setNew({matches:e.matches});
    window.matchMedia("(max-width: 750px)").addListener(handler);
   },[])
   console.log(New,"screen")





    return (
      
    <>

     

{!New.matches? 
          <div className="main_header">

     <div className="header_inside">
     <div style={{flex:.4,color:"white"}}><p>Transfer</p></div>
          <div style={{flex:.6,color:"white"}}><p>Sightseeing rides</p></div>
      
      </div>
    
      <div className="header_inside">
      <div style={{flex:.4,color:"white"}}><p>Share</p></div>
       <div style={{flex:.8,color:"white",display:"flex",alignItems:"flex-start",justifyContent:"flex-start"}}>
           <div><Avatar style={{width:"50px",height:"50px",marginTop:"-12px"}} alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png" />
           </div><p style={{marginTop:"4px",marginLeft:"8px"}}>Subhan Akram</p></div>
      </div>

       </div>
      :<Header2_mobile />}
    


    </>
    
   

    )
}

export default Header
