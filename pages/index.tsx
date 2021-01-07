import Container from 'react-bootstrap/Container';
import Jumbotron from '../components/Jumbotron';
import Head from '../components/Head';
import PageBase from '../components/PageBase';

import styles from '../styles/Home.module.css';

const Home = () => {
  const title = 'Hello. I\'m Tony.';
  const subtitle = 'I\'m an undergraduate computer science student at the University of Waterloo.';
  const message = `
  To navigate this website, use the links in the header.
  `;
  const construction = 'This website is under construction!';
  return (
    <>
      <Head />
      <PageBase pageName="home">
        <Jumbotron className={styles.mainJumbo}>
          <Container className={styles.insideMainJumbo}>
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
      </PageBase>
    </>
  );
};

export default Home;
