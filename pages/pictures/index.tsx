import Jumbotron from '../../components/Jumbotron';
import Head from '../../components/Head';
import PageBase from '../../components/PageBase';

import styles from '../../styles/Pictures.module.css';

const Pictures = () => (
  <>
    <Head subpageTitle="Pictures" />
    <PageBase pageName="pictures">
      <Jumbotron className={styles.mainJumbo}>
        <h1 className={styles.description}>There is nothing here yet.</h1>
      </Jumbotron>
    </PageBase>
  </>
);

export default Pictures;
