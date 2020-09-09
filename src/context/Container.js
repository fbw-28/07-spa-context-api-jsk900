import React, { useState } from 'react';
import Context from './Context';

//We pass in props to the Container so we can access the children
const Container = (props) => {
  //Create state and setState functions with useState as needed
  const [x, setX] = useState(10);
  const [y, setY] = useState(13);

  return (
    //Pass the states and setState functions through the context.provider. Wrap around the children.
    <Context.Provider value={{ x, setX, y, setY }}>
      {props.children}
    </Context.Provider>
  );
};

export default Container;
