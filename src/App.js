import React from 'react';
import Container from './context/Container';
import B from './components/B';
import C from './components/C';

function App() {
  return (
    <Container>
      <div className='App'>
        <h1>My React App</h1>
        <B />
        <C />
      </div>
    </Container>
  );
}

export default App;
