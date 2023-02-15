import React from "react";

const Header=(props)=>{
  console.warn("header",props.data)
    return(
        <div>
             <div className="add-to-cart">
              <span className="counter ">{props.data.length}</span>
               <img className="cartimg" src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5559871.jpg" alt=""/>
             </div>
         
          </div>
      )
}

export default Header; 