// components/Header.js
import React from 'react';
import Link from 'next/link'; // Importing Link for client-side navigation
import { Container, Row, Col,Button } from 'react-bootstrap'; // Importing Bootstrap grid components

const Header = () => {
  return (
    <header className="sticky-header">
      <Container>
        <Row className="align-items-baseline">
          {/* Logo on the left */}
          <Col xs={3} className="logo-col">
            {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
            <h3 style={{fontSize:'20px',textTransform:'uppercase',fontWeight:'bold',marginBottom:'0'}}>cfs information portal</h3>
          </Col>

          {/* Menu in the center */}
          <Col xs={7} className="text-center menu-col">
            <nav>
              <ul className="menu">
                <li>
                  <Link href="index">Home</Link>
                </li>
                <li>
                  <Link href="/information">Information</Link>
                </li>
                <li>
                  <Link href="#alternative-therapies">Alternative Therapies</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </Col>

          {/* Phone number on the right */}
          <Col xs={2} className="text-right phone-col">
          <Link href="/information">
                 
                 <Button variant="primary" className="loginbbtn">Login</Button>
              
             </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
