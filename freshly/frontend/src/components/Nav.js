import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { IoMdMenu } from "react-icons/io";

function Nav() {

    const [scrolled, setScrolled ] = useState(false);


    const showStar = () =>{
        if(window.scrollY>60){
            setScrolled(true)
        }
        else{
            setScrolled(false)   
        }
    }


    useEffect(function mount() {
       
        window.addEventListener('scroll', showStar);
    
        return function unMount() {
          window.removeEventListener("scroll", showStar);
        };
      });


      useEffect(() => {
        console.log("Scrolled", scrolled)
      },[scrolled])
  return (
    <div>
        {/* Large screen navbar */}

        <nav className="navbarBg">
            {/* Logo */}
            <img className="navbarLogo" src="/images/logo2.png" alt="NavLogo"/>

            {/* Nav Buttons */}

            <div className="navbarBtns">
                <div className="navbarBtn">
                    <p className='navbarTxt'>Home</p>
                    <div className="navbarLine"/>
                </div>

                <div className="navbarBtn">
                    <p className='navbarTxt'>About</p>
                    <div className="navbarLine"/>
                </div>


                <div className="navbarBtn">
                    <p className='navbarTxt'>Blogs</p>
                    <div className="navbarLine"/>
                </div>

                <div className="navbarBtn">
                    <p className='navbarTxt'>Signup</p>
                    <div className="navbarLine"/>
                </div>
            </div>
            
        </nav>

        {/* Small screen Navbar */}

        <nav className="navbarSmBg">
            <img src="/images/logo2.png"/>

            <div className="navbarSmBtns">
                <div className="navbarSmBtn">
                    <p className=''>Home</p>
                    <div className="navbarLine"/>
                </div>

                <div className="navbarSmBtn">
                    <p style={{marginLeft:"25px"}} className=''>Signup</p>
                    <div className="navbarLine"/>
                </div>

                <IoMdMenu  style={{marginLeft:"25px"}}  className="menuIcon"/>

              
             </div>
        </nav>
    </div>
  )
}

export default Nav