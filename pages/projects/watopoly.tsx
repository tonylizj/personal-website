import ProjectDetails from '../../components/ProjectDetails';

// eslint-disable-next-line react/function-component-definition
const Watopoly = () => (
  <ProjectDetails
    title="Watopoly"
    subtitle="University of Waterloo themed Monopoly game written in C++."
    summaryText="Watopoly is my final project for CS246. It is a console based (and graphical through XWindow) implementation of Monopoly under a Waterloo theme. We used RAII principles, model-view-controller, and Observer design patterns."
    images={['images/watopolyDetails/init.png', 'images/watopolyDetails/board.png', 'images/watopolyDetails/buy.png']}
    sizes={[{ height: 350, width: 450 }, { height: 350, width: 300 }, { height: 150, width: 450 }]}
    captions={['Initialization', 'Board', 'Buying Property']}
    buttons={[
      { name: 'Code available on request', disabled: true },
    ]}
  />
);

export default Watopoly;
