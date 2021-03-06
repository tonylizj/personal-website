import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import Jumbotron from '../components/Jumbotron';
import Head from '../components/Head';
import PageBase from '../components/PageBase';

import styles from '../styles/Home.module.css';

const Home = () => {
  const title = 'Hello. I\'m Tony.';
  const subtitle = 'I\'m an undergraduate computer science student at the University of Waterloo. Currently on co-op as a software developer at Honeybee Hub.';

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
                  <Image className={styles.nextImage} src="/portrait.jpg" layout="fill" objectFit="cover" objectPosition="left" quality="60" priority />
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
