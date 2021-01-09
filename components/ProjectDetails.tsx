import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Head from './Head';
import PageBase from './PageBase';
import Jumbotron from './Jumbotron';

import styles from '../styles/ProjectDetails.module.css';

interface ProjectLink {
  name: string;
  url: string;
}

interface ImageSize {
  height: number;
  width: number;
}

interface ProjectDetailsProps {
  title: string;
  subtitle: string;
  text: string;
  images: string[];
  sizes: ImageSize[];
  captions: string[];
  buttons: ProjectLink[];
}

const ProjectDetails = (props: ProjectDetailsProps) => {
  const {
    title, subtitle, text, images, captions, buttons, sizes,
  } = props;
  return (
    <>
      <Head subpageTitle={`Projects/${title}`} />
      <PageBase pageName="projects">
        <Jumbotron className={styles.mainJumbo}>
          <Container className={styles.insideMainJumbo}>
            <Card className={styles.card}>
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                <Card.Subtitle className={`text-muted ${styles.cardSubtitle}`}>{subtitle}</Card.Subtitle>
                <Container className={styles.buttonContainer}>
                  <h4 className={styles.buttonsName}>Links: </h4>
                  {buttons.map((b) => <Button key={b.url} className={styles.linkButton} variant="outline-primary" href={b.url} target="_blank">{b.name}</Button>)}
                </Container>
                <Card.Text className={styles.cardText}>
                  {text}
                </Card.Text>
                <Container className={styles.cardAttachments}>
                  {images.map((img, i) => (
                    <Container key={img} className={styles.imgContainer}>
                      <Image src={`/${img}`} layout="intrinsic" height={sizes[i].height} width={sizes[i].width} objectFit="contain" quality="90" loading="eager" priority />
                      <p>{captions[i]}</p>
                    </Container>
                  ))}
                </Container>
                <Container className={styles.linkContainer}>
                  <Link href="/projects" passHref>
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

export default ProjectDetails;
