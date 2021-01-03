import Container from 'react-bootstrap/Container';
import Jumbotron from '../../components/Jumbotron';
import Head from '../../components/Head';
import Navbar from '../../components/Navbar';

const Projects = () => (
  <>
    <Head subpageTitle="Projects" />
    <Navbar currPage="projects" />
    <Container fluid>
      <Jumbotron>
        <Container>
          <h1>Header - Projects</h1>
          <p>Message - Projects</p>
        </Container>
      </Jumbotron>
    </Container>
  </>
);

export default Projects;
