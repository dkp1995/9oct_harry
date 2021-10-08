import React, { useState } from 'react'
import './HomePage.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';

import { Link, NavLink } from 'react-router-dom'

import logo from '../res/logo.png'
import image1 from '../res/image1.jpg'
import image2 from '../res/image2.jpg'
import image3 from '../res/image3.jpg'
import Star from '@material-ui/icons/Star';

const HomePage = () => {

  

    


    return (
        <>
            <section className="header">

                <div className="nav">
                    <Link to="/"><img src={logo}/></Link>
                

                    {/* <div className={show ? "nav-links-mobile" : "nav-links" }>
                        
                        <ul>

                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/order">Order Now</Link></li> 
                            <li><Link to="/contact">Contact Us</Link></li>
                    
                        
                        </ul>
                            
                    </div>

                    <MenuIcon className="fa" onClick={()=>setShow(!show)}/>  */}

                </div>  

                <div className="text-box">

                    <h1>Prayagraj Most trusted Drinking Water Supplier</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s
                    </p>

                    <Link to="/contact" className="hero-btn">Make your first Order</Link>
                    
                </div>  

            </section>

          

          {/* // second section */}

          <section className="services">

              <h1>Services We Offer</h1>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s</p>


               <div className="row">

                    <div className="col">

                        <h3>Camper</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s</p>

                    </div>

                    <div className="col">

                        <h3>Disposal</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s</p>

                    </div>

                    <div className="col">

                        <h3>Bottle</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s</p>

                    </div>
                   
                </div>      

          </section>


          {/* // third section  */}


          {/* <section className="campus">

                    <h1>Our Global Campus</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s</p>


                     <div className="row">

                         <div className="col2">

                             <img src={image1}/>

                             <div className="layer">
                                 <h3>Ocean</h3>
                             </div>

                        </div>

                        <div className="col2">

                             <img src={image2}/>

                             <div className="layer">
                                 <h3>People</h3>
                             </div>

                        </div>

                        <div className="col2">

                             <img src={image3}/>

                             <div className="layer">
                                 <h3>LIfe</h3>
                             </div>

                        </div>

                     </div>


          </section> */}

          {/* //  four section /// */}


          <section className="facilities">

            <h1>facilities We Offer</h1>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s</p>


            <div className="row">

                <div className="col3">
                        <img src={image3}/>
                        <h3>World Class Library</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>

                <div className="col3">
                        <img src={image2}/>
                        <h3>World Class Library</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>

                <div className="col3">
                        <img src={image1}/>
                        <h3>World Class Library</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            
            </div>         


          </section>

            {/* {/// five section ////} */}

                <section className="testimonial">

                    <h1>What our customer says</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s</p>


                    <div className="row">

                        <div className="col4">

                                <img src={image3}/>

                                <div>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                    <h3>Deepak Gautam</h3>
                                    <StarIcon color="primary"/>
                                    <StarIcon color="primary"/>
                                    <StarIcon color="primary"/>
                                    <StarIcon color="primary"/>
                                    <StarOutlineIcon color="primary"/>
                                </div>
                                
                              
                        </div>

                        <div className="col4">

                                <img src={image2}/>
                               
                            

                                <div>

                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>


                                <h3>Ashish Kumar</h3>
                                    <StarIcon color="primary"/>
                                    <StarIcon color="primary"/>
                                    <StarIcon color="primary"/>
                                    <StarIcon color="primary"/>
                                    <StarHalfIcon color="primary"/>

                                </div>
                                   
                        </div>

                        {/* <div className="col4">
                                <img src={image1}/>
                             
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                    <h3>Dileep Pal</h3>
                        </div> */}

                    </div>         


                    </section>


                    {/* ////// call to action ///// */}

                    <section className="cta">
                            <h1> Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry </h1>
                            

                            <Link to="/contact" className="hero-btn">Make your first Order</Link>

                    </section>

               {/* //// footer /// */}
            

            <section className="footer">
                <h3>About Us</h3>
                
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>


                <div className="icons">

                    <FacebookIcon className="fa"/>
                    <InstagramIcon className="fa"/>
                    

                </div>

                <p>All Right Reserved @ Shri Hari Jal</p>
                       
            </section>

        </>
    
    )
}

export default HomePage
