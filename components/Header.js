import React, { useState } from "react";
import Link from 'next/link';
import { Container, Row, Col,Nav, Dropdown } from 'react-bootstrap';
import Image from 'next/image';

const Header = () => {
  const [buttonText, setButtonText] = useState("Membership");
  const [dropdownState, setDropdownState] = useState({});

  // Function to handle dropdown visibility
  const handleDropdown = (key, value) => {
    setDropdownState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
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

          <Col xs={3}>
            <Image 
              src="/images/me-logo.png" 
              alt="ME Logo" 
              width={55} 
              height={55} 
              className="logo"
              style={{ objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Navigation Menu */}
      <Container fluid style={{ paddingTop: "30px" }}>
      <Row className="align-items-center">
        <Col xs={12} className="text-center menu-col">
          <Nav className="justify-content-center menu">
            <Nav.Item>
              <Nav.Link as={Link} href="/">Home</Nav.Link>
            </Nav.Item>

            {/* Main Dropdown */}
            <Dropdown
              onMouseEnter={() => handleDropdown("main", true)}
              onMouseLeave={() => handleDropdown("main", false)}
              show={dropdownState.main}
            >
              <Dropdown.Toggle as={Nav.Link} id="dropdown-basic">
                Information (A-Z)
              </Dropdown.Toggle>
              <Dropdown.Menu className="menu-dropdown">
                
                {/* 🔹 Finance Dropdown */}
                <Dropdown
                  drop="end"
                  onMouseEnter={() => handleDropdown("finance", true)}
                  onMouseLeave={() => handleDropdown("finance", false)}
                  show={dropdownState.finance}
                >
                  <Dropdown.Toggle as="div" className="dropdown-item">
                    Finance
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="menu-dropdown">
                    <Dropdown.Item as={Link} href="#">Universal Credit</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">New Style ESA</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Personal Independence Payment (PIP)</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Support for Mortgage Interest (SMI)</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Attendance Allowance</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Disability Living Allowance</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Household Support Fund</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Cold Weather Payments</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Mobility Aids: Scooters, Wheelchairs, Stools, Chairs, Etc.</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Hints & Tips</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* 🔹 Mental Health Dropdown */}
                <Dropdown
                  drop="end"
                  onMouseEnter={() => handleDropdown("mental_health", true)}
                  onMouseLeave={() => handleDropdown("mental_health", false)}
                  show={dropdownState.mental_health}
                >
                  <Dropdown.Toggle as="div" className="dropdown-item">
                    Mental Health
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="menu-dropdown">
                    <Dropdown.Item as={Link} href="#">Depression – Urgent Help</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Family & Friends</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Mental Health</Dropdown.Item>

                    {/* 🔸 Cognitive Behavioural Therapy (CBT) Nested */}
                    <Dropdown
                      drop="end"
                      onMouseEnter={() => handleDropdown("cbt", true)}
                      onMouseLeave={() => handleDropdown("cbt", false)}
                      show={dropdownState.cbt}
                    >
                      <Dropdown.Toggle as="div" className="dropdown-item">
                        Cognitive Behavioural Therapy / Psychotherapy / Counselling
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="menu-dropdown">
                        <Dropdown.Item as={Link} href="#">Free of Charge</Dropdown.Item>
                        <Dropdown.Item as={Link} href="#">Low Cost</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Menu>
                </Dropdown>

                {/* 🔹 Sleep Dropdown */}
                <Dropdown
                  drop="end"
                  onMouseEnter={() => handleDropdown("sleep", true)}
                  onMouseLeave={() => handleDropdown("sleep", false)}
                  show={dropdownState.sleep}
                >
                  <Dropdown.Toggle as="div" className="dropdown-item">
                    Sleep
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="menu-dropdown">
                    <Dropdown.Item as={Link} href="#">Improving Your Sleep Hygiene</Dropdown.Item>

                    {/* 🔸 Sleeping Aids Nested */}
                    <Dropdown
                      drop="end"
                      onMouseEnter={() => handleDropdown("sleeping_aids", true)}
                      onMouseLeave={() => handleDropdown("sleeping_aids", false)}
                      show={dropdownState.sleeping_aids}
                    >
                      <Dropdown.Toggle as="div" className="dropdown-item">
                        Sleeping Aids
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="menu-dropdown">
                        <Dropdown.Item as={Link} href="#">Herbalists</Dropdown.Item>
                        <Dropdown.Item as={Link} href="#">Traditional Chinese Medicine (TCM) Practitioners</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown.Item as={Link} href="#">Links to Other Organisations</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
 {/* 🔹 Nutrition Dropdown */}
 <Dropdown
                  drop="end"
                  onMouseEnter={() => handleDropdown("nutrition", true)}
                  onMouseLeave={() => handleDropdown("nutrition", false)}
                  show={dropdownState.nutrition}
                >
                  <Dropdown.Toggle as="div" className="dropdown-item">
                    Nutrition
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="menu-dropdown">
                    <Dropdown.Item as={Link} href="#">Supplements</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Diet</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* 🔹 Exercise Dropdown */}
                <Dropdown
                  drop="end"
                  onMouseEnter={() => handleDropdown("exercise", true)}
                  onMouseLeave={() => handleDropdown("exercise", false)}
                  show={dropdownState.exercise}
                >
                  <Dropdown.Toggle as="div" className="dropdown-item">
                    Exercise
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="menu-dropdown">
                    <Dropdown.Item as={Link} href="#">Walking</Dropdown.Item>
                    
                    {/* 🔸 Yoga */}
                    <Dropdown
                      drop="end"
                      onMouseEnter={() => handleDropdown("yoga", true)}
                      onMouseLeave={() => handleDropdown("yoga", false)}
                      show={dropdownState.yoga}
                    >
                      <Dropdown.Toggle as="div" className="dropdown-item">
                        Yoga
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="menu-dropdown">
                        <Dropdown.Item as={Link} href="#">Science – trials to prove/disprove it works</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* 🔸 Qigong */}
                    <Dropdown
                      drop="end"
                      onMouseEnter={() => handleDropdown("qigong", true)}
                      onMouseLeave={() => handleDropdown("qigong", false)}
                      show={dropdownState.qigong}
                    >
                      <Dropdown.Toggle as="div" className="dropdown-item">
                        Qigong
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="menu-dropdown">
                        <Dropdown.Item as={Link} href="#">Science – trials to prove/disprove it works</Dropdown.Item>
                        <Dropdown.Item as={Link} href="#">Where to learn</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown.Item as={Link} href="#">Swimming / Water Exercise</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Other Exercise</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                 {/* 🔹 Breathing Techniques Dropdown */}
 <Dropdown
                  drop="end"
                  onMouseEnter={() => handleDropdown("breathing", true)}
                  onMouseLeave={() => handleDropdown("breathing", false)}
                  show={dropdownState.breathing}
                >
                  <Dropdown.Toggle as="div" className="dropdown-item">
                    Breathing Techniques
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="menu-dropdown">
                    
                    {/* 🔸 Books Nested */}
                    <Dropdown
                      drop="end"
                      onMouseEnter={() => handleDropdown("breathing_books", true)}
                      onMouseLeave={() => handleDropdown("breathing_books", false)}
                      show={dropdownState.breathing_books}
                    >
                      <Dropdown.Toggle as="div" className="dropdown-item">
                        Books
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="menu-dropdown">
                        <Dropdown.Item as={Link} href="#">Book 1</Dropdown.Item>
                        <Dropdown.Item as={Link} href="#">Book 2</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* 🔸 YouTube Videos Nested */}
                    <Dropdown
                      drop="end"
                      onMouseEnter={() => handleDropdown("breathing_videos", true)}
                      onMouseLeave={() => handleDropdown("breathing_videos", false)}
                      show={dropdownState.breathing_videos}
                    >
                      <Dropdown.Toggle as="div" className="dropdown-item">
                        YouTube Videos
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="menu-dropdown">
                        <Dropdown.Item as={Link} href="#">Video 1</Dropdown.Item>
                        <Dropdown.Item as={Link} href="#">Video 2</Dropdown.Item>
                        <Dropdown.Item as={Link} href="#">Video 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </Dropdown.Menu>
                  
                </Dropdown>
                
                <Dropdown.Item as={Link} href="#">Pain: Heat, Cold, and Other Non-Drug Forms of Pain Relief</Dropdown.Item>
                <Dropdown.Item as={Link} href="#">Pacing</Dropdown.Item>
                <Dropdown.Item as={Link} href="#">Other Organisations Self-Help Websites</Dropdown.Item>
                <Dropdown.Item as={Link} href="#">Books & Videos</Dropdown.Item>
                {/* 🔹 Technology Dropdown */}
                <Dropdown
                  drop="end"
                  onMouseEnter={() => handleDropdown("technology", true)}
                  onMouseLeave={() => handleDropdown("technology", false)}
                  show={dropdownState.technology}
                >
                  <Dropdown.Toggle as="div" className="dropdown-item">
                    Technology
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="menu-dropdown">
                    <Dropdown.Item as={Link} href="#">Pedometer</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Oxymeter</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Heart Rate Variability (HRV) Monitor</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">CPAP Machine</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Vagus Nerve Stimulators</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Timers</Dropdown.Item>
                    <Dropdown.Item as={Link} href="#">Headphones</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Dropdown.Menu>
              
            </Dropdown>


               

        
            <Nav.Item>
              <Nav.Link as={Link} href="#">Alternative Therapies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} href="#">Rate your Therapies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} href="#">Your Suggestions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>

      {/* Styles */}

    </header>
  );
};

export default Header;
