import ProjectDetails from '../../components/ProjectDetails';

import init from '../../public/images/watopolyDetails/init.png';
import board from '../../public/images/watopolyDetails/board.png';
import buy from '../../public/images/watopolyDetails/buy.png';

// eslint-disable-next-line react/function-component-definition
const Watopoly = () => (
  <ProjectDetails
    title="Watopoly"
    subtitle="University of Waterloo themed Monopoly game written in C++."
    summaryText="Watopoly is my final project for CS246. It is a console based (and graphical through XWindow) implementation of Monopoly under a Waterloo theme. We used RAII principles, model-view-controller, and Observer design patterns."
    images={[init, board, buy]}
    captions={['Initialization', 'Board', 'Buying Property']}
    buttons={[
      { name: 'Code available on request', disabled: true },
    ]}
  />
);

export default Watopoly;
