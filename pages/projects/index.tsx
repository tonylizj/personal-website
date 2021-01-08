import Container from 'react-bootstrap/Container';
import ProjectCard from '../../components/ProjectCard';
import Jumbotron from '../../components/Jumbotron';
import Head from '../../components/Head';
import PageBase from '../../components/PageBase';

import styles from '../../styles/Projects.module.css';

const Projects = () => (
  <>
    <Head subpageTitle="Projects" />
    <PageBase pageName="projects">
      <Jumbotron className={styles.mainJumbo}>
        <Container className={styles.insideMainJumbo}>
          <ProjectCard
            title="FlowerID"
            message="Android app that identifies photos of flowers using a convolutional neural network."
            details="/projects/flowerid"
            buttons={[
              { name: 'GitHub', url: 'https://github.com/tonylizj/FlowerID-App' },
              { name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.flowerid' },
            ]}
            image="images/flowerid-icon.png"
          />
          <ProjectCard
            title="highlighter"
            message="Node.js + Express API and Discord bot that syntax highlights code."
            details="/projects/highlighter"
            buttons={[
              { name: 'GitHub', url: 'https://github.com/tonylizj/highlighter' },
              { name: 'API', url: 'https://highlighter-api.herokuapp.com/' },
              { name: 'UI', url: 'https://tonylizj.github.io/highlighter-ui/' },
            ]}
            image="images/highlighter-icon.png"
          />
        </Container>
      </Jumbotron>
    </PageBase>
  </>
);

export default Projects;
