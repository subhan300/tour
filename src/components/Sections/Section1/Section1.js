import React,{useState,useEffect} from 'react'
import "./Section1.css"
function Section1() {
  


  
  const[New,setNew]=useState({matches: window.matchMedia("(max-width: 400px)").matches })
  useEffect(()=>{
   const handler = e =>setNew({matches:e.matches});
   window.matchMedia("(max-width: 400px)").addListener(handler);
   
  },[])




    return (
      <>
      
       {!New.matches?   
       <div className="section1_menu"  >
            <div className="left_section1_menu" >
                <div className="s1" href="#section1">Stops</div>
                <div className="s2">About</div>
                <div className="s3" href="#section3">Reviews</div>
                <div className="s4">Questions</div>

            </div>
             
            <div id="section1_right">Share</div>
     
        </div>:
        
        <div className="left_section1_menu" style={{paddingTop:"10px",borderBottom:"1px solid lightgray",paddingBottom:"7px"}}>
        <div>Stops</div>
        <div>About</div>
        <div>Reviews</div>
        <div>Questions</div>

    </div>  }


     










      </>
    )
}

export default Section1
