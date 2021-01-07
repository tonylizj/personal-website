import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';

import styles from '../styles/PageBase.module.css';

interface JumboPageBaseProps {
  pageName: string;
}

const PageBase = (props: React.PropsWithChildren<JumboPageBaseProps>) => {
  const { pageName, children } = props;
  return (
    <Container className={styles.wrapperFull} fluid>
      <Navbar currPage={pageName} />
      <Container className={styles.belowNav} fluid>
        {children}
      </Container>
    </Container>
  );
};

export default PageBase;
