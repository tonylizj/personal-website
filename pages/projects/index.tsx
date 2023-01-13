import Container from 'react-bootstrap/Container';
import ProjectCard from '../../components/ProjectCard';
import Jumbotron from '../../components/Jumbotron';
import Head from '../../components/Head';
import PageBase from '../../components/PageBase';

import styles from '../../styles/Projects.module.css';

// eslint-disable-next-line react/function-component-definition
const Projects = () => (
  <>
    <Head subpageTitle="Projects" />
    <PageBase pageName="projects">
      <Jumbotron className={styles.mainJumbo}>
        <Container className={styles.insideMainJumbo}>
          {/* TODO: move this data (and the ones in individual project pages) out to data files */}
          <ProjectCard
            title="FlowerID"
            message="Android app built with React Native that identifies photos of flowers using a convolutional neural network."
            details="/projects/flowerid"
            buttons={[
              { name: 'GitHub', url: 'https://github.com/tonylizj/FlowerID-App' },
              { name: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.flowerid' },
            ]}
            image="images/flowerid-icon.png"
          />
          <ProjectCard
            title="highlighter"
            message="Discord bot and React web app with a Node.js + Express REST API backend that syntax highlights code."
            details="/projects/highlighter"
            buttons={[
              { name: 'GitHub', url: 'https://github.com/tonylizj/highlighter' },
              { name: 'API', url: 'https://highlighter-api.herokuapp.com/' },
              { name: 'Front End', url: 'https://tonylizj.github.io/highlighter-ui/' },
              { name: 'Bot Invite', url: 'https://discord.com/api/oauth2/authorize?client_id=791903902874206258&permissions=10240&scope=bot' },
            ]}
            image="images/highlighter-icon.png"
          />
          <ProjectCard
            title="config-sync"
            message="VS Code extension that makes starting new projects easier by syncing configuration files with a MongoDB database."
            details="/projects/config-sync"
            buttons={[
              { name: 'GitHub', url: 'https://github.com/tonylizj/config-sync' },
              { name: 'Extension Marketplace', url: 'https://marketplace.visualstudio.com/items?itemName=tonylizj.config-sync' },
            ]}
            image="images/config-sync-icon.png"
          />
          <ProjectCard
            title="Watopoly"
            message="University of Waterloo themed Monopoly game written in C++."
            details="/projects/watopoly"
            buttons={[
              { name: 'Code available on request', disabled: true },
            ]}
          />
        </Container>
      </Jumbotron>
    </PageBase>
  </>
);

export default Projects;
