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
          <ProjectCard // TODO: test these with next/image
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
              // TODO: better icon
            title="highlighter"
            message="highlighter description"
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
