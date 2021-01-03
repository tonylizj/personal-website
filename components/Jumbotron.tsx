import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import styles from '../styles/Jumbotron.module.css';

interface customJumbotronProps {
  className?: string;
}

const customJumbotron = (props: React.PropsWithChildren<customJumbotronProps>) => {
  const { className } = props;
  return (
    <Jumbotron className={`${styles.jumbotron} ${className}`}>
      {props.children}
    </Jumbotron>
  );
};

export default customJumbotron;
