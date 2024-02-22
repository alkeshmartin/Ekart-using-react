import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-primary '>
        <div className='footer d-flex align-items-center justify-content-evenly mt-5  '>
          <div className='website' style={{width:"400px"}}>
            <h5>
            <i class="fa-solid fa-cart-arrow-down ms-5 me-3"></i>E-Kart
            </h5>
            <p style={{textAlign:"justify"}} className='ms-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet eligendi ratione odit in suscipit, qui eos minima perferendis repudiandae corrupti doloribus porro ipsum repellat mollitia itaque ex? Quae, officiis asperiores?</p>
          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/' style={{textDecoration:"none", color:"black"}}>Home</Link>
            <Link to='/cart' style={{textDecoration:"none",color:"black"}}>Cart</Link>
            <Link to='/wishlist' style={{textDecoration:"none",color:"black"}}>Wishlist</Link>
          </div>
          <div className='guides d-flex flex-column ms-5' >
            <h4>Guides</h4>
            <Link to='https://react.dev/' target='_blank' style={{textDecoration:"none", color:"black"}}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:"none",color:"black"}}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{textDecoration:"none",color:"black"}}>Bootswatch</Link>
          </div>
          <div className='contactUs ms-5'>
            <h4>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='enter your email'/>
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
          <div className='icons d-flex mt-2'>
            <Link to='https://www.instagram.com/' target='_blank'><i class="fa-brands fa-instagram"></i></Link>
            <Link to='https://twitter.com/i/flow/login' target='_blank'><i class="fa-brands fa-x-twitter ms-4"></i></Link>
            <Link to='https://www.linkedin.com/login' target='_blank'><i class="fa-brands fa-linkedin ms-4"></i></Link>
            <Link to='https://www.facebook.com/login/' target='_blank'><i class="fa-brands fa-facebook ms-4"></i></Link>
          </div>
          </div>
        </div>
      </div>
      <p className='mt-5 text-center'>Copyright &copy;  2023 mediaplayer built with React</p>
    </>
  )
}

export default Footer