import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Head from '../../components/Head';
import NavBar from '../../components/NavBar';

const Pictures = () => (
  <>
    <Head subpageTitle="Pictures" />
    <NavBar />
    <Container fluid>
      <Jumbotron>
        <Container>
          <h1>Header - Pictures</h1>
          <p>Message - Pictures</p>
        </Container>
      </Jumbotron>
    </Container>
  </>
);

export default Pictures;
