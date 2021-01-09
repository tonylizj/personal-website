import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Head from './Head';
import PageBase from './PageBase';
import Jumbotron from './Jumbotron';

import styles from '../styles/Flowerid.module.css';

interface ProjectDetailsProps {
  title: string;
  subtitle: string;
  text: string;
}

const ProjectDetails = (props: ProjectDetailsProps) => {
  const { title, subtitle, text } = props;
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
                <Card.Text className={styles.cardText}>
                  {text}
                </Card.Text>
                <Container className={styles.cardAttachments}>
                  <Container>
                    <Card.Link href="#">Card Link 1</Card.Link>
                  </Container>
                  <Container>
                    <Card.Link href="#">Card Link 2</Card.Link>
                  </Container>
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
