import Jumbotron from '../../components/Jumbotron';
import Head from '../../components/Head';
import PageBase from '../../components/PageBase';

import styles from '../../styles/Pictures.module.css';

const Pictures = () => (
  <>
    <Head subpageTitle="Pictures" />
    <PageBase pageName="pictures">
      <Jumbotron className={styles.mainJumbo}>
        <h1 className={styles.description}>This is going to be a photo gallery</h1>
        <h3 className={styles.description}>...eventually</h3>
      </Jumbotron>
    </PageBase>
  </>
);

export default Pictures;
