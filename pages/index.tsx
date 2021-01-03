import Container from 'react-bootstrap/Container';
import Jumbotron from '../components/Jumbotron';
import Head from '../components/Head';
import Navbar from '../components/Navbar';

import styles from '../styles/Home.module.css';

const Home = () => {
  const titleHeader = 'Hello, I\'m Tony.';
  const titleMessage = 'I\'m an undergraduate computer science student at the University of Waterloo.';
  const placeholderText = 'placeholder text';
  return (
    <>
      <Head />
      <Navbar currPage="home" />
      <Container fluid>
        <Jumbotron className={styles.mainJumbo}>
          <Container>
            <h1>{titleHeader}</h1>
            <p>{titleMessage}</p>
          </Container>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
        <Jumbotron>
          <p>{placeholderText}</p>
        </Jumbotron>
      </Container>
    </>
  );
};

export default Home;
