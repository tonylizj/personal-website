import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from '../styles/NavBar.module.css';

const NavBar = () => (
  <Navbar className={styles.navbar} bg="primary" variant="dark" expand="sm" sticky="top">
    <Link href="/" passHref>
      <Navbar.Brand className={styles.navbrand}>Tony Li</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link href="/" passHref>
          <Nav.Link className={styles.navlink}>Home</Nav.Link>
        </Link>
        <Link href="/projects" passHref>
          <Nav.Link className={styles.navlink}>Projects</Nav.Link>
        </Link>
        <Link href="/pictures" passHref>
          <Nav.Link className={styles.navlink}>Pictures</Nav.Link>
        </Link>
        <Nav.Link className={styles.navlink} href="https://github.com/tonylizj">GitHub</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
