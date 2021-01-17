import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import styles from '../styles/ProjectCard.module.css';

interface ProjectLink {
  name: string;
  url?: string;
  disabled?: boolean;
}

interface ProjectCardProps {
  title: string;
  message: string;
  details: string;
  buttons: ProjectLink[];
  image?: string;
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
      {image === '' ? null
        : (
          <Container className={styles.nextImageContainer}>
            <Image src={`/${image}`} layout="fill" objectFit="cover" objectPosition="center" quality="80" priority />
          </Container>
        )}
      <Card.Body>
        <Link href={details} passHref>
          <a>
            <Card.Title className={styles.title}>{title}</Card.Title>
          </a>
        </Link>
        <Card.Text className={styles.description}>{message}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container className={styles.details}>
          <Link href={details} passHref>
            <Button className={styles.detailsButton} variant="primary">
              About
              {' '}
              {title}
            </Button>
          </Link>
        </Container>
        <Container className={styles.buttonContainer}>
          {buttons.map((b) => (b.disabled ? <Button key={b.url} className={styles.linkButton} variant="outline-primary" disabled>{b.name}</Button> : <Button key={b.url} className={styles.linkButton} variant="outline-primary" href={b.url} target="_blank">{b.name}</Button>))}
        </Container>
      </Card.Footer>
    </Card>
  );
};

ProjectCard.defaultProps = {
  image: '',
};

export default ProjectCard;
