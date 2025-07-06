import React from 'react'
import About from '../component/about'
import Contact from '../component/Contact'
import Home from '../component/Home'
import { Link } from 'react-router-dom'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import vr from '../assets/vr.png';
import vr2 from '../assets/vr2.jpg';
import vr3 from '../assets/vr3.jpg';
import vr5 from '../assets/vr5.jpg';
import vr9 from '../assets/vr9.jpg';
const Navbar = () => {
  return (
    <div>
<nav className='n'>
    <img src={vr9} className='img1'/>
      <ul className='ulsb'>
      <Link to="/About" className='linku'><i className="fa fa-bookmark" aria-hidden="true"></i>About</Link>
      <Link to="/Home" className='linku'><i className="fa fa-home" aria-hidden="true"></i>Home</Link>
      <Link to="/Contact" className='linku'><i className="fa fa-phone" aria-hidden="true"></i>Contact</Link>

      </ul>
      </nav>
      <div style={{maxWidth:'100%', margin:'40px auto',height:'auto' }}>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src={vr}/>
            </div>
            <div>
                <img src={vr2}/>
            </div>
            <div>
                <img src={vr3}/>
            </div>
        </Carousel>
        <div style={{backgroundColor:"#ffcc00",color:"black",fontWeight:"bold",padding:"20px 0",fontSize:"25px"}}>
        <marquee behavior="scroll" direction="left">  plants are available
        </marquee>
         </div>
      </div>
      <div className="about-section">
      <div className="about-content">
        {/* Left image */}
        <div className="about-image">
          <img src={vr5}/>
        </div>

        {/* Right text */}
        <div className='about-text'>
            <h2>About<br></br>Vruksha Landscape</h2>
            <p>We believe that beautiful and green surroundings bring us happiness.
            It gives us a calm of mind in today’s chaotic world, gets us closer to nature 
            and improves the quality and productivity of our lives. With this passion to 
            reform the spaces that we live and work in, we started a company so that we 
            can focus our expertise exclusively in the area of landscape. Thus in early 2000, 
            Vruksha Landscapes was born. Holding integrity and customer satisfaction as our primary ideals, 
            we have worked hard to consistently achieve the highest quality of craftsmanship and 
            deliver the best softscape and other products on our projects.</p>
        </div>
        </div>
      </div>

  </div>
  )
}

export default Navbar
