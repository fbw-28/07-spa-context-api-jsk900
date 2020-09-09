import React, { useContext } from 'react';
import Context from '../context/Context';

const C = () => {
  const { x, y, setX } = useContext(Context);
  return (
    <div>
      <h1>C, Y = {y}</h1>
      <button onClick={() => setX(x + 1)}>Increment x</button>
    </div>
  );
};

export default C;
