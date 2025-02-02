// pages/index.js
import Header from '../components/Header';
import React, { useEffect } from "react";
import Footer from '../components/Footer';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { Container, Row, Col, Button,Card } from 'react-bootstrap';
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
import Image from "next/image";
const HomePage = () => {
 
  const services = [
    { title: "General Checkup", desc: "Get a full body checkup to ensure you're in great health.",className:'one' },
    { title: "Dental Care", desc: "Comprehensive dental care services to maintain your oral health.",className:'two' },
    { title: "Cardiology", desc: "Advanced heart care services with expert consultation.",className:'three'},
    { title: "Pediatrics", desc: "Quality healthcare services for children and infants.",className:'four' },
    { title: "Dermatology", desc: "Skin treatment and consultations from top dermatologists.",className:'five' }
  ];
  const testimonials = [
    {
      name: "John Doe",
      picture: "https://media.istockphoto.com/id/1409948464/photo/business-portrait.jpg?s=612x612&w=0&k=20&c=UUfD4mgds-bcgL8Q3QsDKzgwJIqwQ9vwpXp7LiWOZ7U=",
      content: "The therapies at CFS Information Portal have significantly improved my condition. I'm feeling better and more energetic every day.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      picture: "https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?s=612x612&w=0&k=20&c=OtFYs_rdWIm6JJZxAanK6f0pV-YMfMr1IXUAHUCRfss=",
      content: "I found hope at CFS Information Portal. The therapies helped me feel relief from my chronic illness when nothing else could.",
      rating: 4,
    },
    {
      name: "Alice Johnson",
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAumjjgoy7WEgnhS9o5Tkk9NQJ0aHOAqlgQ&s",
      content: "CFS Information Portal gave me a new lease on life. I've experienced noticeable improvement and can finally be more active.",
      rating: 5,
    },
    {
      name: "Mark Wilson",
      picture: "https://www.shutterstock.com/image-photo/portrait-male-owner-gift-store-260nw-1688925868.jpg",
      content: "The treatments here have made a huge difference in my health. I feel better, and I finally see hope for the future.",
      rating: 5,
    },
  ];
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const $ = window.$; // jQuery
      const OwlCarousel = window.OwlCarousel; // Owl Carousel

      if ($ && OwlCarousel) {
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          center: true,
          autoplay: true,
          autoplayTimeout: 3000,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          },
        });
      }
    }
  }, []); // Run once when the component mounts
  
  return (
    <>
      <Header />
      <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className='overlay'></div>
        <Container>
          <Row className="justify-content-start">
            <Col md={6} className="hero-content">
              <h1 className="hero-title">Empowering Your Journey with CFS Support</h1>
              <p className="hero-description">
                Explore resources, alternative therapies, and expert advice to manage Chronic Fatigue Syndrome.
              </p>
              <div className="hero-buttons">
                <Link href="/information">
                 
                    <Button variant="primary" className="hero-button">Learn More</Button>
                 
                </Link>
                <Link href="/contact">
                
                    <Button variant="secondary" className="hero-button">Join Now</Button>
             
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-md-6">
            <Image
              src="/images/about.webp"
              alt="About Us"
              width={500}
              height={500}
              className="about-img"
            />
          </div>

          {/* Right Column - Content */}
          <div className="col-md-6">
            <div className='content-area'>
            <h4 className="sub-heading">Who We Are</h4>
            <h2 className="main-heading">Your Trusted Medical Partner</h2>
            <p className="about-text">
              Our mission is to provide top-notch healthcare services with a focus on 
              patient-centered care. With a dedicated team of experienced professionals, 
              we ensure every patient receives the highest quality treatment tailored to 
              their individual needs. We believe in combining modern medical practices 
              with a compassionate approach to improve lives.
            </p>
            <p className="about-text">
              Whether you're seeking routine checkups, specialized medical treatments, 
              or urgent care, we are here to assist you. Our state-of-the-art facilities, 
              advanced technology, and a team that genuinely cares make us the right 
              choice for your healthcare needs.
            </p>
            <button className="about-btn">Learn More</button>
            </div>
          
          </div>
        </div>
      </div>
    </section>
    <section className="services-section" >
      <Container>
        <Row className="align-items-start">
          {/* Left Column: Heading & Short Paragraph */}
          <Col md={6}>
            <h2 className="">Our Services</h2>
            <p className="">
              Explore our wide range of medical services designed to provide top-notch healthcare solutions for you and your family.
            </p>
          </Col>

          {/* Right Column: Sticky Scroll Cards */}
          <Col md={6}>
            <div className='servicescardcontainer'>
              {services.map((service, index) => (
                <Card key={index} className="servicescard">
                  <Card.Body>
                    <Card.Title className='card-title'>{service.title}</Card.Title>
                    <Card.Text className='card-desc'>{service.desc}</Card.Text>
                    <Button  className="cardbtn">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="testimonial-section">
        <Container>
          <Row>
          <h2 className="">Real Stories, Real Healing</h2>
            <Col>
              <OwlCarousel className="owl-carousel owl-theme">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="item">
                    <img
                      src={testimonial.picture}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gray-300"
                    />
                    <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                    <div className="mt-2 text-yellow-500">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
      <Footer />
    </>
  );
};

export default HomePage;
