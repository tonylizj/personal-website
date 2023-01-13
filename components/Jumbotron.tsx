import React from 'react';
import Container from 'react-bootstrap/Container';

import styles from '../styles/Jumbotron.module.css';

interface customJumbotronProps {
  className?: string;
}

const customJumbotron = (props: React.PropsWithChildren<customJumbotronProps>) => {
  const { className } = props;
  return (
    <Container className={`${styles.jumbotron} ${className}`}>
      {props.children}
    </Container>
  );
};

export default customJumbotron;
