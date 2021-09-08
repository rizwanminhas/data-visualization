import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Face from './face/Face'

const array = [1, 2, 3, 4, 5]

ReactDOM.render(
  <React.StrictMode>
    {array.map((i) => (
      <Face key={i}
        width={166}
        height={166}
        strokeWidth={10}
        eyeOffsetX={30}
        eyeRadius={15}
        mouthWidth={10}
        mouthRadius={30} />
    )
    )}
  </React.StrictMode>,
  document.getElementById('root')
);
