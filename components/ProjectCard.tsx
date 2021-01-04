import Link from 'next/link';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import styles from '../styles/ProjectCard.module.css';

interface ProjectLink {
  name: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  message: string;
  details: string;
  buttons: ProjectLink[];
  image: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const {
    title,
    message,
    details,
    buttons,
    image,
  } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Container className={styles.cardImg} fluid>
        <Image
          layout="responsive"
          className="card-img-top"
          src={`/${image}`}
          height="286px"
          width="286px"
          priority
        />
      </Container>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{message}</Card.Text>
        <Container className={`d-flex ${styles.details}`}>
          <Link href={details} passHref>
            <Button className="flex-grow-1" variant="primary">See Details</Button>
          </Link>
        </Container>
        <Container className="d-flex justify-content-around">
          {buttons.map((b) => <Button variant="outline-primary" className="mr-2" href={b.url} target="_blank">{b.name}</Button>)}
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
