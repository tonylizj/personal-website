import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import styles from '../styles/Navbar.module.css';

interface NextNavLinkProps {
  href: string;
  eventKey?: string;
}

const NextNavLink = (props: React.PropsWithChildren<NextNavLinkProps>) => {
  const { children, href, eventKey } = props;
  return (
    <Link href={href} passHref>
      {eventKey
        ? <Nav.Link eventKey={eventKey}>{children}</Nav.Link>
        : <Nav.Link>{children}</Nav.Link>}
    </Link>
  );
};

interface NextButtonLinkProps {
  href: string;
  eventKey?: string;
}

const NextButtonLink = (props: React.PropsWithChildren<NextButtonLinkProps>) => {
  const { children, href } = props;
  return (
    <Link href={href} passHref>
      <Button className={styles.btn} variant="outline-light" target="_blank">{children}</Button>
    </Link>
  );
};

interface customNavbarProps {
  currPage: string;
}

const customNavbar = (props: customNavbarProps) => {
  const { currPage } = props;
  return (
    <Navbar className={styles.navbar} variant="dark" expand="md" sticky="top">
      <Link href="/" passHref>
        <Navbar.Brand className={styles.navbrand}>Tony Li</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav defaultActiveKey={currPage} className="mr-auto">
          <NextNavLink href="/" eventKey="home">Home</NextNavLink>
          <NextNavLink href="/projects" eventKey="projects">Projects</NextNavLink>
          <NextNavLink href="/pictures" eventKey="pictures">Pictures</NextNavLink>
        </Nav>
        <NextButtonLink href="https://github.com/tonylizj">
          GitHub
        </NextButtonLink>
        <NextButtonLink href="/">
          Resume
        </NextButtonLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default customNavbar;
