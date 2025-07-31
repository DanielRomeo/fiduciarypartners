'use client';

import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <BootstrapNavbar expand="lg" className="navbar-custom fixed-top">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <BootstrapNavbar.Brand>Fiduciary Partners</BootstrapNavbar.Brand>
        </Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link className={pathname === '/' ? 'active' : ''}>
                Home
              </Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link className={pathname === '/about' ? 'active' : ''}>
                About
              </Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link className={pathname === '/contact' ? 'active' : ''}>
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;