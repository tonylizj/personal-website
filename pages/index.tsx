import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import Jumbotron from '../components/Jumbotron';
import Head from '../components/Head';
import PageBase from '../components/PageBase';

import styles from '../styles/Home.module.css';

import profilePic from '../public/portrait.jpg';

// eslint-disable-next-line react/function-component-definition
const Home = () => {
  const title = 'Hello. I\'m Tony.';
  const subtitle = 'I\'m an undergraduate computer science student at the University of Waterloo.';

  const extra = '';

  return (
    <>
      <Head />
      <PageBase pageName="home">
        <Jumbotron className={styles.mainJumbo}>
          <Container className={styles.insideMainJumbo}>
            <Container className={styles.wrapper} fluid>
              <Container className={styles.titleWrapper} fluid>
                <Container className={styles.nextImageContainer}>
                  {/* TODO: do this wo container so placeholder loads in faster */}
                  <Image alt="profile picture" src={profilePic} fill style={{ objectFit: 'cover' }} placeholder="blur" priority />
                </Container>
                <Container className={styles.titleTextWrapper} fluid>
                  <h1 className={styles.title}>{title}</h1>
                  <h4 className={styles.subtitle}>{subtitle}</h4>
                </Container>
              </Container>
            </Container>
            <Container className={styles.wrapper} fluid>
              <p className={styles.extra}>{extra}</p>
            </Container>
          </Container>
        </Jumbotron>
      </PageBase>
    </>
  );
};

export default Home;
