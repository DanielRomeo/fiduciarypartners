'use client'
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import styles from '../styles/navbar.module.scss';

const NavbarComponent: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const services = [
    'Antitrust & Competition',
    'Banking & Finance',
    'Business and Human Rights (BHR)',
    'Capital Markets',
    'Constitutional & Administrative',
    'Construction',
    'Corporate & Commercial',
    'Data Protection & Information Management',
    'Disputes - Alternative Dispute Resolution & Litigation',
    'Employment & Employee Benefits',
    'Environment',
    'Environmental, Social & Governance (ESG)',
    'Financial Services Regulation',
    'Forensic Services',
    'Fund Formation',
    'Government & Public Entities',
    'Insurance & Liability',
    'Intellectual Property (IP)',
    'International Trade',
    'Occupational Health & Safety',
    'Pensions',
    'Pro Bono',
    'Projects',
    'Property',
    'Regulatory',
    'Restructuring, Business Rescue & Insolvency',
    'Risk & Crisis Management',
    'Shipping & Marine',
    'Tax',
    'Technology'
  ];

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false);

  return (
    <Navbar 
      expand="lg" 
      className={styles.navbar} 
      expanded={expanded}
      onToggle={handleToggle}
      fixed="top"
    >
      <Container fluid className={styles.navbarContainer}>
        <Navbar.Brand href="#home" className={styles.brand}>
          <div className={styles.brandContent}>
            <span className={styles.brandMain}>FIDUCIARY PARTNERS</span>
            <span className={styles.brandSub}>in alliance with Macbase</span>
          </div>
        </Navbar.Brand>

        <div className={styles.contactInfo}>
          <div className={styles.locations}>
            <span className={styles.location}>Polokwane</span>
            {/* <span className={styles.location}>Cape Town</span> */}
          </div>
          <div className={styles.phoneNumbers}>
            <span className={styles.phone}>+27 (0) 11 530 5000</span>
            {/* <span className={styles.phone}>+27 (0) 21 431 7000</span> */}
          </div>
        </div>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className={styles.navbarToggle}
        />
        
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
          <Nav className={`ms-auto ${styles.navLinks}`} onSelect={handleSelect}>
            <Nav.Link href="#home" className={styles.navLink}>
              HOME
            </Nav.Link>
            
            <NavDropdown 
              title="EXPERTISE" 
              id="expertise-dropdown" 
              className={styles.navDropdown}
              show={undefined}
            >
              <div className={styles.dropdownContent}>
                <div className={styles.servicesSection}>
                  <h6 className={styles.sectionTitle}>Services</h6>
                  <div className={styles.servicesList}>
                    {services.map((service, index) => (
                      <NavDropdown.Item 
                        key={index}
                        href={`#service-${index}`}
                        className={styles.dropdownItem}
                      >
                        {service}
                      </NavDropdown.Item>
                    ))}
                  </div>
                </div>
              </div>
            </NavDropdown>

            <Nav.Link href="#about" className={styles.navLink}>
              ABOUT
            </Nav.Link>
            
            <Nav.Link href="#contact" className={styles.navLink}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;