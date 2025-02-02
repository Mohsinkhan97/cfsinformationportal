// components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing phone and email icons
import Link from 'next/link'; // Importing Next.js Link component

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* First column - Logo and info */}
          <Col md={4} className="footer-col">
            <img src="/logo.png" alt="Logo" className="footer-logo" />
            <p className="footer-info">Your trusted source for ME/CFS information and alternative therapies.</p>
          </Col>

          {/* Second column - Quick links */}
          <Col md={2} className="footer-col">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/information">Information</Link></li>
              <li><Link href="/alternative-therapies">Alternative Therapies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* Third column - Services */}
          <Col md={2} className="footer-col">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li><Link href="/services/medical-consultation">Medical Consultation</Link></li>
              <li><Link href="/services/wellness-coaching">Wellness Coaching</Link></li>
              <li><Link href="/services/alternative-medicine">Alternative Medicine</Link></li>
              <li><Link href="/services/physical-therapy">Physical Therapy</Link></li>
            </ul>
          </Col>

          {/* Fourth column - Contact us */}
          <Col md={4} className="footer-col">
            <h5 className="footer-heading">Contact Us</h5>
            <p><FaPhoneAlt /> <a href="tel:+123456789" className="footer-contact">+123 456 789</a></p>
            <p><FaEnvelope /> <a href="mailto:info@cfsinformationportal.com" className="footer-contact">info@cfsinformationportal.com</a></p>
            <div className="footer-social-icons">
              {/* Using Font Awesome CDN icons for social media */}
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>
        </Row>

        {/* Separator line */}
        <hr className="footer-separator" />

        {/* Copyright content */}
        <div className="footer-copyright">
          <p>&copy; 2025 CFS Information Portal. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
