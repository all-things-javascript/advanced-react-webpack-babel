import React from 'react';
import './App.scss';

// component imports
import Image from './Image/Image';

// other imports
import coffee from '../../public/images/coffee.png';

const App = () => {
  return (
    <div>
      <span>Hello World</span>
      <Image
        src={coffee}
        alt="hero"
        height="400"
        width="400"
      />
    </div>
  );
};

export default App;
