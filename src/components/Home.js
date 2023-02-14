import React from "react";

const Home=(props)=>{
  console.warn("home",props.data)
    return(
        <div> 
          <h1>Home Component</h1>
          <div className="cart-wrapper">
              <div className="img-wrapper item">
                  <img className="imge" alt="" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/iphoto/ios15-iphone13-pro-home-camera-callout.png"/>
              </div>
              <div className="text-wrapper item">
                   <span>
                        I-Phone
                   </span>
                   <span>
                        Price : $1000
                   </span>
              </div>
              <div className="btn-wrapper item">
                  <button 
                  onClick={()=>props.addToCartHandler({price:1000,name:'i-phone 14'})}>Add To Cart</button>
              </div>
          </div>
        </div>
      )
}

export default Home; 