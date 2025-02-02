// components/Header.js
import React from 'react';
import Link from 'next/link'; // Importing Link for client-side navigation
import { Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap grid components

const Header = () => {
  return (
    <header className="sticky-header">
      <Container>
        <Row className="align-items-center">
          {/* Logo on the left */}
          <Col xs={2} className="logo-col">
            <img src="/logo.png" alt="Logo" className="logo" />
          </Col>

          {/* Menu in the center */}
          <Col xs={8} className="text-center menu-col">
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
            <a href="tel:+123456789" className="phone-number">
              <i className="fas fa-phone"></i> +123 456 789
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
