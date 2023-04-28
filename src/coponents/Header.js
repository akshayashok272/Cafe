import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
 <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="fs-2">
            <img
              alt=""
              src="https://play-lh.googleusercontent.com/nO6-J5kGclK4Akr_-l5TT7mdm4JgFd9_L-_7m3e-y6p9mI2CA5tSir2l5tM1xT8zMA"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{' '}
            Café Javas
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header