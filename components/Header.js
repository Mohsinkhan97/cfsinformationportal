// components/Header.js
import React, { useState } from "react";
import Link from 'next/link'; // Importing Link for client-side navigation
import { Container, Row, Col,Button } from 'react-bootstrap'; // Importing Bootstrap grid components
import Image from 'next/image';
const Header = () => {
  const [buttonText, setButtonText] = useState("Membership");
  return (
    <header className="main-header">
      <Container fluid>
        <Row className="align-items-center">
          {/* Logo on the left */}
          <Col xs={6} className="logo-col">
          <img 
    src="/images/logo.png" 
    alt="Logo" 
    className="logo" 
   
  />
           
          </Col>




         
          <Col xs={3} className="text-right phone-col">
          <Link href="/information" passHref>
      <button
        className="loginbbtn"
        onMouseEnter={() => setButtonText("10% of revenues will be donated to ME Research")}
        onMouseLeave={() => setButtonText("Membership")}
      >
        {buttonText}
      </button>
    </Link>
          </Col>
          <Col xs={3} className="">
          <img 
    src="/images/me-logo.png" 
    alt="Logo" 
    className="logo" 
   style={{width:'55px',
    height: '55px',
    objectFit: 'cover'}}
  />
           
          </Col>
        </Row>
      </Container>
      <Container fluid style={{    paddingTop: '30px'}}>
        <Row className="align-items-center">
          {/* Logo on the left */}
         

          {/* Menu in the center */}
          <Col xs={12} className="text-center menu-col">
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
                  <Link href="#">Alternative Therapies</Link>
                </li>
                <li>
                  <Link href="#">Rate your Therapies</Link>
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


        </Row>
      </Container>
    </header>
  );
};

export default Header;
