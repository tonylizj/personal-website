import ProjectDetails from '../../components/ProjectDetails';

import storePage from '../../public/images/configSyncDetails/storePage.png';
import mongodb from '../../public/images/configSyncDetails/mongodb.png';

// eslint-disable-next-line react/function-component-definition
const ConfigSync = () => (
  <ProjectDetails
    title="config-sync"
    subtitle="VS Code extension that makes starting new projects easier by syncing configuration files with a MongoDB database. "
    summaryText={`config-sync is an extension written in Node.js with Typescript with the Visual Studio Code extension development API.
    
    Users can provide a connection to their MongoDB instance or use global storage on local disk provided by the API. The extension then allows uploading files (with custom aliases) as well as downloading and writing files to the current workspace directory with a single command without ever leaving the text editor.`}
    images={[storePage, mongodb]}
    captions={['Feature Contributions', 'Uploaded Files on a MongoDB database']}
    buttons={[
      { name: 'GitHub', url: 'https://github.com/tonylizj/config-sync' },
      { name: 'Extension Marketplace', url: 'https://marketplace.visualstudio.com/items?itemName=tonylizj.config-sync' },
    ]}
  />
);

export default ConfigSync;
