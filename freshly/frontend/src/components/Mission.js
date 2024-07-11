import React from 'react'
import "./Mission.css"
function Mission() {
  return (
    <div className="missionBg">
        {/* Left side */}

        <div className="missionLeft">
            <h2 className="missionTitle">Our Mission</h2>
            <div className="missionTextWrapper">
                <div className="missionParagraph">
                
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
                    <p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                </div>
            </div>
          
            
        </div>
        {/* Right side */}
        <div className="missionRight">
            {/* Top */}
            <div className="missionRightTop">
                <img src="/images/hero1.png"/>
                <img  className="missionImg2" src="/images/hero2.png"/>

            </div>
            {/* <img src="/images/hero1.png"/> */}

            <div  className="missionRightBottom">
            {/* Bottom */}
                <img src="/images/hero3.png"/>
                <img  className="missionImg2" src="/images/hero4.png"/>
            </div>
        </div>
    </div>
  )
}

export default Mission