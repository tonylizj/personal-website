import React from 'react';
import Link from 'next/link';
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
}

const ProjectCard = (props: React.PropsWithChildren<ProjectCardProps>) => {
  const {
    title,
    message,
    details,
    buttons,
    children,
  } = props;
  return (
    <Card style={{ width: '18rem' }}>
      {children}
      <Card.Body>
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Text>{message}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container className={`d-flex ${styles.details}`}>
          <Link href={details} passHref>
            <Button className="flex-grow-1" variant="primary">See Details</Button>
          </Link>
        </Container>
        <Container className="d-flex justify-content-around">
          {buttons.map((b) => <Button key={b.url} variant="outline-primary" href={b.url} target="_blank">{b.name}</Button>)}
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
