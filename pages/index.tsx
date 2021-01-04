import Container from 'react-bootstrap/Container';
import Jumbotron from '../components/Jumbotron';
import Head from '../components/Head';
import Navbar from '../components/Navbar';

import styles from '../styles/Home.module.css';

const Home = () => {
  const title = 'Hello. I\'m Tony.';
  const subtitle = 'I\'m an undergraduate computer science student at the University of Waterloo.';
  const message = `
  To navigate this website, use the links in the header.
  `;
  const construction = 'This website is under construction.';
  return (
    <>
      <Head />
      <Container className={styles.wrapperFull} fluid>
        <Navbar currPage="home" />
        <Container className={`d-flex flex-column ${styles.belowNav}`} fluid>
          <Jumbotron className={`d-flex flex-grow-1 ${styles.mainJumbo}`}>
            <Container className="d-flex flex-column flex-grow-1 justify-content-between">
              <Container className={styles.wrapper} fluid>
                <Container className={styles.wrapper} fluid>
                  <h1 className={styles.header}>{title}</h1>
                  <h4 className={styles.subtitle}>{subtitle}</h4>
                </Container>
                <Container className={styles.wrapper} fluid>
                  <p className={styles.message}>{message}</p>
                </Container>
              </Container>
              <Container className={styles.wrapper} fluid>
                <p className={styles.construction}>{construction}</p>
              </Container>
            </Container>
          </Jumbotron>
        </Container>
      </Container>
    </>
  );
};

export default Home;
