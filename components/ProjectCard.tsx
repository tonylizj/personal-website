import React from 'react';
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
    <Card className={styles.card}>
      <Container className={styles.nextImageContainer}>
        <Image src={`/${image}`} layout="fill" objectFit="cover" objectPosition="center" quality="80" loading="eager" priority />
      </Container>
      {/* <Card.Img variant="top" src={image} /> */}
      <Card.Body>
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Text>{message}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container className={styles.details}>
          <Link href={details} passHref>
            <Button className={styles.detailsButton} variant="primary">See Details</Button>
          </Link>
        </Container>
        <Container className={styles.buttonContainer}>
          {buttons.map((b) => <Button key={b.url} variant="outline-primary" href={b.url} target="_blank">{b.name}</Button>)}
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
