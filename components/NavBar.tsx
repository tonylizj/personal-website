import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from '../styles/NavBar.module.css';

interface NextNavLinkProps {
  href: string;
}

const NextNavLink = (props: React.PropsWithChildren<NextNavLinkProps>) => {
  const { children, href } = props;
  return (
    <Link href={href} passHref>
      <Nav.Link className={styles.navlink}>{children}</Nav.Link>
    </Link>
  );
};

const NavBar = () => (
  <Navbar className={styles.navbar} bg="primary" variant="dark" expand="sm" sticky="top">
    <Link href="/" passHref>
      <Navbar.Brand className={styles.navbrand}>Tony Li</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NextNavLink href="/">Home</NextNavLink>
        <NextNavLink href="/projects">Projects</NextNavLink>
        <NextNavLink href="/pictures">Pictures</NextNavLink>
        <Nav.Link className={styles.navlink} href="https://github.com/tonylizj" target="_blank">GitHub</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
