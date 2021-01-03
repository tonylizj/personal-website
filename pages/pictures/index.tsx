import Container from 'react-bootstrap/Container';
import Jumbotron from '../../components/Jumbotron';
import Head from '../../components/Head';
import Navbar from '../../components/Navbar';

const Pictures = () => (
  <>
    <Head subpageTitle="Pictures" />
    <Navbar currPage="pictures" />
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
