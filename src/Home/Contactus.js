import React, { useState } from 'react'

import './Contactus.css'

import MenuIcon from '@material-ui/icons/Menu';


import logo from '../res/logo.png'

import { Link, NavLink } from 'react-router-dom'

const Contactus = () => {

    const [show, setShow] = useState(false)

    return (
        <>

                    <section className="header">

                        <nav>
                            <Link to="/"><img src={logo}/></Link>


                            {/* <div className={show ? "nav-links-mobile" : "nav-links" }>
                                
                                <ul>

                                    <li><Link to="/">Home</Link></li>
                                     <li><Link to="/order">Order Now</Link></li> 
                                    <li><Link to="/contact">Contact Us</Link></li>
                            
                                
                                </ul>
                                    
                            </div>

                            <MenuIcon className="fa" onClick={()=>setShow(!show)}/> */}

                        </nav>  

                    <div className="text-box">

                        <h1>Contact us</h1>
                        <p>
                             Contact us now on the given phone number and order now
                        </p>

                        

                       <div className="phone">
                            8174999493 Rishi Gupta <br/><br/> 7617072849 Shri Om Gupta
                       </div>

                       <br/><br/><br/><br/><br/>
                       
                       <p>
                            Address : 79B/1C, Chak Mundera  ( Ram Chandra Mission Road ) Prayagraj <br/>
                            
                            
                        </p>
                        
                    </div>  

                    </section>

        </>
    )
}

export default Contactus
