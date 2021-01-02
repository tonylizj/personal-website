import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavBar from '../components/NavBar';

const Home = () => {
  const titleHeader = 'Hello, I\'m Tony.';
  const titleMessage = 'I\'m an undergraduate computer science student at the University of Waterloo.';
  const placeholderText = 'placeholder text';
  return (
    <>
      <Head>
        <title>Tony Li</title>
      </Head>
      <NavBar />
      <Container fluid>
        <Jumbotron style={{ height: '80vh' }}>
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
