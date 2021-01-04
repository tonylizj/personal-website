import Container from 'react-bootstrap/Container';
import Jumbotron from '../../components/Jumbotron';
import Head from '../../components/Head';
import Navbar from '../../components/Navbar';

import styles from '../../styles/Pictures.module.css';

const Pictures = () => (
  <>
    <Head subpageTitle="Pictures" />
    <Container className={styles.wrapperFull} fluid>
      <Navbar currPage="pictures" />
      <Container className={`d-flex flex-column ${styles.belowNav}`} fluid>
        <Jumbotron className={`d-flex flex-grow-1 ${styles.mainJumbo}`}>
          <Container className="d-flex flex-row flex-grow-1 flex-wrap justify-content-around align-content-start">
          </Container>
        </Jumbotron>
      </Container>
    </Container>
  </>
);

export default Pictures;
