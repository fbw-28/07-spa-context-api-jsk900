import React, { useContext } from 'react';
import Context from '../context/Context';

const B = () => {
  const { x, y, setY } = useContext(Context);
  return (
    <div>
      <h1>B, X = {x}</h1>
      <button onClick={() => setY(y + 1)}>Increment y</button>
    </div>
  );
};

export default B;
