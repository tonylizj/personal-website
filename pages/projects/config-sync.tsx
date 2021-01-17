import ProjectDetails from '../../components/ProjectDetails';

const ConfigSync = () => (
  <ProjectDetails
    title="config-sync"
    subtitle="VSCode extension that syncs configuration files between similar projects with a MongoDB database."
    summaryText={`config-sync is an extension written in Node.js with Typescript with the Visual Studio Code extension development API.
    
    Users can provide a connection to their MongoDB instance or use global storage on local disk provided by the API. The extension then allows uploading files (with custom aliases) as well as downloading and writing files to the current workspace directory with a single command without ever leaving the text editor.`}
    images={['images/configsyncDetails/storePage.png', 'images/configsyncDetails/mongodb.png']}
    sizes={[{ height: 350, width: 450 }, { height: 350, width: 450 }]}
    captions={['Feature Contributions', 'Uploaded Files on a MongoDB database']}
    buttons={[
      { name: 'GitHub', url: 'https://github.com/tonylizj/config-sync' },
      { name: 'Extension Marketplace', url: 'https://marketplace.visualstudio.com/items?itemName=tonylizj.config-sync' },
    ]}
  />
);

export default ConfigSync;
