import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import { useMediaQuery } from 'react-responsive';
import Jumbotron from '../components/Jumbotron';
import Head from '../components/Head';
import PageBase from '../components/PageBase';

import styles from '../styles/Home.module.css';

const Home = () => {
  const title = 'Hello. I\'m Tony.';
  const subtitle = 'I\'m an undergraduate computer science student at the University of Waterloo.';
  const construction = '';

  const isMobile = useMediaQuery({ maxWidth: 700 });
  const isHuge = useMediaQuery({ minWidth: 2800 });

  return (
    <>
      <Head />
      <PageBase pageName="home">
        <Jumbotron className={styles.mainJumbo}>
          {/* eslint-disable-next-line */}
          <Container className={isMobile ? styles.insideMainJumbo : (isHuge ? styles.insideMainJumboHuge : styles.insideMainJumbo)}>
            <Container className={styles.wrapper} fluid>
              <Container className={styles.titleWrapper} fluid>
                {/* eslint-disable-next-line max-len */}
                <Container className={isMobile ? styles.nextImageContainerMobile : styles.nextImageContainer}>
                  <Image className={styles.nextImage} src="/portrait.jpg" layout="fill" objectFit="cover" objectPosition="left" quality="60" loading="eager" priority />
                </Container>
                <Container className={styles.titleTextWrapper} fluid>
                  {/* eslint-disable-next-line */}
                  <h1 className={isMobile ? styles.titleMobile : (isHuge ? styles.titleHuge : styles.title)}>{title}</h1>
                  {/* eslint-disable-next-line */}
                  <h4 className={isMobile ? styles.subtitleMobile : (isHuge ? styles.subtitleHuge : styles.subtitle)}>{subtitle}</h4>
                </Container>
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
