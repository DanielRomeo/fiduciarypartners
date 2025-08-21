/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useState } from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";

const NavbarMain: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const services = [
    "Antitrust & Competition",
    "Banking & Finance",
    "Business and Human Rights (BHR)",
    "Capital Markets",
    "Constitutional & Administrative",
    "Construction",
    "Corporate & Commercial",
    "Data Protection & Information Management",
    "Disputes - Alternative Dispute Resolution & Litigation",
    "Employment & Employee Benefits",
    "Environment",
    "Environmental, Social & Governance (ESG)",
    "Financial Services NavbarRegulation",
    "Forensic Services",
    "Fund Formation",
    "Government & Public Entities",
    "Insurance & Liability",
    "Intellectual Property (IP)",
    "International Trade",
    "Occupational Health & Safety",
    "Pensions",
    "Pro Bono",
    "Projects",
    "Property",
    "Regulatory",
    "Restructuring, Business Rescue & Insolvency",
    "Risk & Crisis Management",
    "Shipping & Marine",
    "Tax",
    "Technology",
  ];

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={handleToggle}
      expand="lg"
      className={styles.navbarContainer}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          href="/"
          className={styles.navbarBrand}
          onClick={handleSelect}
        >
          <div className={styles.logoText}>FIDUCIARY PARTNERS</div>
          <div className={styles.subText}>in alliance with Macbase</div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.navbarToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              href="/"
              onClick={handleSelect}
              className={styles.navLink}
            >
              HOME
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className={styles.navDropdown}
              onSelect={handleSelect}
            >
              {services.map((service:any, index:number) => {
                const href = `/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                return (
                  <NavDropdown.Item
                    key={index}
                    as={Link}
                    href={href}
                    className={styles.dropdownItem}
                  >
                    {service}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link
              as={Link}
              href="/about"
              onClick={handleSelect}
              className={styles.navLink}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/contact"
              onClick={handleSelect}
              className={styles.navLink}
            >
              CONTACT
            </Nav.Link>
          </Nav>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.location}>Polokwane</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.phone}>+27 (0) 11 530 5000</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
