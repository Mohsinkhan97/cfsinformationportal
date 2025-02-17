// components/Header.js
import React from 'react';
import Link from 'next/link'; // Importing Link for client-side navigation
import { Container, Row, Col,Button } from 'react-bootstrap'; // Importing Bootstrap grid components
import Image from 'next/image';
const Header = () => {
  return (
    <header className="sticky-header">
      <Container fluid>
        <Row className="align-items-center">
          {/* Logo on the left */}
          <Col xs={3} className="logo-col">
          <img 
    src="/images/logo.png" 
    alt="Logo" 
    className="logo" 
   
  />
            {/* <h3 style={{fontSize:'20px',textTransform:'uppercase',fontWeight:'bold',marginBottom:'0',color:'var(--primary-color)'}}>cfs information portal</h3> */}
          </Col>

          {/* Menu in the center */}
          <Col xs={7} className="text-center menu-col">
            <nav>
              <ul className="menu">
              <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="/information">Information (A-z)</Link>
                </li>
                <li>
                  <Link href="#">Your Feedback on Treatment</Link>
                </li>
                <li>
                  <Link href="#">Your Suggestions</Link>
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
                 
                 <Button variant="primary" className="loginbbtn">Membership</Button>
              
             </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
