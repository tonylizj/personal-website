import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Head from '../../components/Head';
import PageBase from '../../components/PageBase';
import Jumbotron from '../../components/Jumbotron';

import styles from '../../styles/Flowerid.module.css';

const Flowerid = () => (
  <>
    <Head subpageTitle="Projects/FlowerID" />
    <PageBase pageName="projects">
      <Jumbotron className={styles.mainJumbo}>
        <Container className={styles.insideMainJumbo}>
          <Card className={styles.card}>
            <Card.Body className={styles.cardBody}>
              <Card.Title className={styles.cardTitle}>FlowerID</Card.Title>
              <Card.Subtitle className={`text-muted ${styles.cardSubtitle}`}>Android app that identifies photos of flowers using a convolutional neural network.</Card.Subtitle>
              <Card.Text className={styles.cardText}>
                Some things about FlowerID.
              </Card.Text>
              <Container className={styles.cardAttachments}>
                <Container>
                  <Card.Link href="#">Card Link</Card.Link>
                </Container>
                <Container>
                  <Card.Link href="#">Card Link</Card.Link>
                </Container>
              </Container>
              <Container className={styles.linkContainer}>
                <Link href="/projects" passHref>
                  <Card.Link>Back to Projects</Card.Link>
                </Link>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </Jumbotron>
    </PageBase>
  </>
);

export default Flowerid;
