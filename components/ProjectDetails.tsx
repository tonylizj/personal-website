import { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Head from './Head';
import PageBase from './PageBase';
import Jumbotron from './Jumbotron';

import styles from '../styles/ProjectDetails.module.css';

// eslint-disable-next-line react/function-component-definition
const ProjectMoreDetails = (props: { title: string, details: string }) => {
  const { title, details } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>{`${title} Details`}</Alert.Heading>
        <Card.Text className={styles.cardText}>
          {details}
        </Card.Text>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Hide Details
          </Button>
        </div>
      </Alert>

      {!show && <Button variant="primary" style={{ marginTop: '2rem', marginBottom: '2rem' }} onClick={() => setShow(true)}>Show Details</Button>}
    </>
  );
};

interface ProjectLink {
  name: string;
  url?: string;
  disabled?: boolean;
}

interface ProjectDetailsProps {
  title: string;
  subtitle: string;
  summaryText: string;
  text?: string;
  images: StaticImageData[];
  captions: string[];
  buttons: ProjectLink[];
}

// eslint-disable-next-line react/function-component-definition
const ProjectDetails = (props: ProjectDetailsProps) => {
  const {
    title, subtitle, summaryText, text, images, captions, buttons,
  } = props;
  return (
    <>
      <Head subpageTitle={`Projects/${title}`} />
      <PageBase pageName="projects">
        <Jumbotron className={styles.mainJumbo}>
          <Container className={styles.insideMainJumbo} fluid>
            <Card className={styles.card}>
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                <Card.Subtitle className={`text-muted ${styles.cardSubtitle}`}>{subtitle}</Card.Subtitle>
                <Container className={styles.buttonContainer}>
                  <h4 className={styles.buttonsName}>Links: </h4>
                  {buttons.map((b) => (b.disabled ? <Button key={b.url} className={styles.linkButton} variant="outline-primary" disabled>{b.name}</Button> : <Button key={b.url} className={styles.linkButton} variant="outline-primary" href={b.url} target="_blank">{b.name}</Button>))}
                </Container>
                <Card.Text className={styles.cardText}>
                  {summaryText}
                </Card.Text>
                {text === '' || text === undefined ? null : <ProjectMoreDetails title={title} details={text} />}
                <Container className={styles.cardAttachments}>
                  {images.map((img, i) => (
                    <Container
                      as="figure"
                      style={{
                        display: 'table',
                        maxWidth: 'max-content',
                        padding: '0',
                        position: 'relative',
                      }}
                    >
                      <Image src={img} className={styles.featureImage} alt="featureImage" placeholder="blur" priority />
                      <figcaption style={{ display: 'table-caption', captionSide: 'bottom' }}>{captions[i]}</figcaption>
                    </Container>
                  ))}
                </Container>
                <Container className={styles.linkContainer}>
                  <Link href="/projects" passHref legacyBehavior>
                    <Card.Link className="text-primary">
                      &larr;Back to Projects
                    </Card.Link>
                  </Link>
                </Container>
              </Card.Body>
            </Card>
          </Container>
        </Jumbotron>
      </PageBase>
    </>
  );
};

ProjectDetails.defaultProps = {
  text: '',
};

export default ProjectDetails;
