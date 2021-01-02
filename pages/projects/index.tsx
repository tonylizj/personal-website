import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavBar from '../../components/NavBar';

const Projects = () => (
  <>
    <Head>
      <title>Tony Li</title>
    </Head>
    <NavBar />
    <Container fluid>
      <Jumbotron>
        <Container>
          <h1>Header</h1>
          <p>Message</p>
        </Container>
      </Jumbotron>
    </Container>
  </>
);

export default Projects;
