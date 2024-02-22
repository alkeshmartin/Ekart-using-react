import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Header() {
  //To access data inside store: useSelector hook is used.
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const cartlistArray = useSelector((state)=>state.cartReducer)
  console.log("===Wishlist array for header===")
  console.log(wishlistArray)
  return (
    <>
    <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:"1"}}>
      <Container>
        <Link to={'/'} >
        <Navbar.Brand href="#home">
          <img height={'30px'} className='me-3' src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="" />E-Kart</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-3'>  
              <Link to={'/wishlist'} style={{color:"white", textDecoration:"none"}}>
                wishlist <Badge bg="secondary">{wishlistArray.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border rounded'> <Link to={'/cart'} style={{width:"100px",color:"white", textDecoration:"none"}}>cart <Badge bg="secondary">{cartlistArray.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header