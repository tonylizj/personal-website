import ProjectDetails from '../../components/ProjectDetails';

// eslint-disable-next-line react/function-component-definition
const Highlighter = () => (
  <ProjectDetails
    title="highlighter"
    subtitle="Discord bot and React web app with a Node.js + Express REST API backend that syntax highlights code."
    summaryText={`highlighter is an API, Discord bot, and React frontend that provides an interface to syntax highlight code in numerous languages.
    
    highlighter is composed of three parts. The API is built with Node.js and Express and is responsible for processing code strings and generating syntax highlighted HTML documents and images. The Discord bot uses this API while parsing users' commands into the desired language and quality. The React frontend is a simple form built with Formik and Bootstrap to send POST requests to the API.`}
    text={`I wanted to make a syntax highlighting tool for Discord because I often shared code snippets with my friends during discussions. There exists a built in code formatting option on Discord, but the highlighting is quite minimal and I didn't really like the colour scheme, so I decided to make my own utility for this. A comparison between Discord's code formatting and the result of highlighter can be found at the bottom of this card.
    
    After some investigation, I decided to use the Prism.js library on a Node.js server to perform the highlighting. Prism.js exposes a function that enables the tokenization of the input code into semantic elements. For example, the input "const a;" in Typescript would yield the result 
    "<span class="token keyword">const</span> a<span class="token punctuation">;</span>".
    I then inserted this output into an HTML document with the appropriate font and stylesheet in the header, which defined the colours I wanted for each token type. The colour scheme I chose is based off of a VS Code theme I really like, One Dark Pro.
    
    The server, created with Express, listens to POST requests and performs the generation of the HTML document described above. Then, I'm using node-html-to-image to render the document and send a headless chromium instance to take a screenshot of the page. This is cropped according to the size of the generated content and sent back as an attachment. The round-trip time of the API is about 3-5 seconds, but depends on the size of the image that needs to be created.
    
    A simple React frontend created with Bootstrap is provided to access the API.

    I built the Discord bot with Discord.js running on another Node.js server, which had the simple task of parsing the user input into the desired language, quality, and code block and sending a POST request with this data to my API with Axios. Calling the bot involved sending "/hl_language_quality" followed by pasting all the code you wanted to highlight. Once the data comes back, it sends a reply in chat. To enable easy copy-pasting of the formatted code, the HTML document is also sent.
    
    This is a comparison of the highlighting of a random code block by Discord and highlighter respectively. Note the difference in colours and contrast as well as ligatures such as '>=' that improve readability.
    `}
    images={['images/highlighterDetails/discordHighlight.png', 'images/highlighterDetails/hlHighlight.png']}
    sizes={[{ height: 350, width: 450 }, { height: 350, width: 450 }]}
    captions={['Discord Highlighting', 'highlighter Highlighting']}
    buttons={[
      { name: 'GitHub', url: 'https://github.com/tonylizj/highlighter' },
      { name: 'API', url: 'https://highlighter-api.herokuapp.com/' },
      { name: 'Front End', url: 'https://tonylizj.github.io/highlighter-ui/' },
      { name: 'Bot Invite', url: 'https://discord.com/api/oauth2/authorize?client_id=791903902874206258&permissions=10240&scope=bot' },
    ]}
  />
);

export default Highlighter;
