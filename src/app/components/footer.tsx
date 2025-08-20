"use client";

import { Container } from "react-bootstrap";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGavel,
  FaShieldAlt,
} from "react-icons/fa";

import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerCustom}>
      <Container>
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <div className={styles.footerBrand}>
              <FaGavel className={styles.brandIcon} />
              Fiduciary Partners
            </div>
            <p className="mb-3">
              Providing trusted legal counsel and fiduciary services to
              businesses across South Africa. Excellence in corporate law,
              compliance, and business development since 2010.
            </p>

            <div className={styles.contactInfo}>
              <FaEnvelope />
              <span>info@fiduciarypartners.co.za</span>
            </div>
            <div className={styles.contactInfo}>
              <FaPhone />
              <span>+27 (0)76 509 3410</span>
            </div>
            <div className={styles.contactInfo}>
              <FaMapMarkerAlt />
              <span>Pretoria, Gauteng, South Africa</span>
            </div>

            {/* Social Media */}
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Legal Services */}
          <div className="col-lg-2 mb-4">
            <h5 className={styles.footerHeading}>Legal Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className={styles.footerLink}>
                  Corporate Law
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Company Formation
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Contract Drafting
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Mergers & Acquisitions
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Employment Law
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Intellectual Property
                </a>
              </li>
            </ul>
          </div>

          {/* Fiduciary Services */}
          <div className="col-lg-2 mb-4">
            <h5 className={styles.footerHeading}>Fiduciary Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className={styles.footerLink}>
                  Trust Administration
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Estate Planning
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Regulatory Compliance
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Risk Management
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Due Diligence
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Corporate Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 mb-4">
            <h5 className={styles.footerHeading}>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/team" className={styles.footerLink}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className={styles.footerLink}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div className="col-lg-2 mb-4">
            <h5 className={styles.footerHeading}>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/privacy" className={styles.footerLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.footerLink}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className={styles.footerLink}>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className={styles.footerLink}>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/complaints" className={styles.footerLink}>
                  Complaints Procedure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Info */}
        <div className="row">
          <div className="col-12">
            <div className={styles.regulatoryInfo}>
              <FaShieldAlt className={styles.regulatoryIcon} />
              <div>
                <p className="mb-1">
                  <strong>Fiduciary Partners (Pty) Ltd</strong> - Registration
                  No: 2010/123456/07
                </p>
                <p className="mb-0">
                  Authorised Financial Services Provider (FSP 12345) | Regulated
                  by the Financial Sector Conduct Authority (FSCA)
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.footerDivider} />

        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; 2025 Fiduciary Partners (Pty) Ltd. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              Professional legal services in Pretoria & Johannesburg
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
