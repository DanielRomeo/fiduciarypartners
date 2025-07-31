'use client';

import { Container } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="footer-brand">Fiduciary Partners</div>
            <p className="mb-3">Driven by purpose, designed for impact. Making professional legal support accessible to every business.</p>
            <div className="contact-info">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@fiduciarypartners.com</span>
            </div>
            <div className="contact-info">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+27 76509 3410</span>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Company Formation</a></li>
              <li><a href="#" className="footer-link">Legal Documentation</a></li>
              <li><a href="#" className="footer-link">Compliance Support</a></li>
              <li><a href="#" className="footer-link">Business Development</a></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
        </div>
        <hr style={{borderColor: 'rgba(255,255,255,0.1)'}} />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2025 Fiduciary Partners (Pty) Ltd. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;