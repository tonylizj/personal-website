import ProjectDetails from '../../components/ProjectDetails';

const FlowerID = () => (
  <ProjectDetails
    title="FlowerID"
    subtitle="Android app built with React Native that identifies photos of flowers using a convolutional neural network."
    summaryText={`FlowerID is an Android app that takes pictures of flowers and identifies them to be one of the supported species with a convolutional neural network.
    
    The app is built in React Native and Typescript with components from Expo, using the TensorFlow.js library to run the neural network on device. The neural network is built in Keras and TensorFlow with a VGG-16-esque sequential architecture.`}
    text={`I created FlowerID together with a friend to learn about building neural networks and mobile apps. The convolutional neural network is constructed with Tensorflow and Keras. We decided to create the model architecture from scratch instead of retraining existing networks, such as MobileNet, since we wanted to learn about building a network ourselves.
    
    The original idea for FlowerID came from when my parents bought a plant identification booklet to use on hikes. I was looking to make something with machine learning at the time and decided to try to make a basic flower identifier, focusing more on learning than the accuracy of its predictions.
    
    We used this dataset: https://www.kaggle.com/alxmamaev/flowers-recognition, which has labeled images of 5 flower types: daisies, dandelions, roses, sunflowers, and tulips. This is why our app currently only supports these flower types. In the future, we may expand this to support more species, but once again, the goal was to create something of a proof of concept as a learning experience.
    
    Due to the constraints of training the model on a laptop, the size of our input tensors are set to 200x200 (400x400 made my laptop run out of memory, and if we turned the batch size too low it would take hours to train even a dozen epochs). This definitely affects the accuracy of FlowerID, but we avoided using cloud services for our first machine learning project as we wanted to see how everything works out locally. Later on we used Google Cloud Compute to train a model for another project.
    
    The FlowerID Android app was built with React Native (and a bit of Expo) with the help of Tensorflow JS. The initial release used Javascript, but I switched to using Typescript because of my preference for statically typed languages, especially after working with C++ for some time.
    `}
    images={['images/floweridDetails/loading.jpg', 'images/floweridDetails/viewfinder.jpg', 'images/floweridDetails/results.jpg']}
    sizes={[{ height: 400, width: 200 }, { height: 400, width: 200 }, { height: 400, width: 200 }]}
    captions={['FlowerID Loading Up', 'Camera Viewfinder', 'Prediction Results (Text: This is an image of Sunflower)']}
    buttons={[
      { name: 'GitHub', url: 'https://github.com/tonylizj/FlowerID-App' },
      { name: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.flowerid' },
    ]}
  />
);

export default FlowerID;
