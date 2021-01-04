import Container from 'react-bootstrap/Container';
import ProjectCard from '../../components/ProjectCard';
import Jumbotron from '../../components/Jumbotron';
import Head from '../../components/Head';
import Navbar from '../../components/Navbar';

import styles from '../../styles/Projects.module.css';

const Projects = () => (
  <>
    <Head subpageTitle="Projects" />
    <Container className={styles.wrapperFull} fluid>
      <Navbar currPage="projects" />
      <Container className={`d-flex flex-column ${styles.belowNav}`} fluid>
        <Jumbotron className={`d-flex flex-grow-1 ${styles.mainJumbo}`}>
          <Container className="d-flex flex-row flex-grow-1 flex-wrap justify-content-around align-content-start">
            <ProjectCard
              title="FlowerID"
              message="FlowerID description"
              details="/projects/flowerid"
              buttons={[
                { name: 'GitHub', url: 'https://github.com/tonylizj/FlowerID-App' },
                { name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.flowerid' },
              ]}
              image="images/flowerid-icon.png"
            />
            <ProjectCard
              title="highlighter"
              message="highlighter description"
              details="/projects/highlighter"
              buttons={[
                { name: 'GitHub', url: 'https://github.com/tonylizj/FlowerID-App' },
                { name: 'API', url: 'https://highlighter-api.herokuapp.com/' },
                { name: 'UI', url: 'https://tonylizj.github.io/highlighter-ui/' },
              ]}
              image="images/highlighter-icon.png"
            />
          </Container>
        </Jumbotron>
      </Container>
    </Container>
  </>
);

export default Projects;
