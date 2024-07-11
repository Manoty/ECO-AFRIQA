import React from 'react'
import "./Hero.css"
function Hero() {
  return (
    <div className="heroBg">

        <div className="heroComps">
            {/* <img className="bgSm" src="/images/small_bg.png"/> */}
        {/* <div className="heroTest"></div> */}

            <h1 className="">Urbanization Farming and    
            Vertical Farming</h1>

            <h2>Freshly Farms is known for urbanizing the food farming industry especially on horticulture. It helps farmers understand their crops and how to manage them to grow better</h2>
                <div className="heroBtn">
                    <button>GET STARTED</button>

                </div>
            <div className="">
                <img className="heroImgBg" src="/images/heroImage.png" alt="HeroImg"/>

            </div>

                <img className="heroImg" src="/images/heroImg.png" alt="Hero img"/>


          
        </div>

    </div>
  )
}

export default Hero