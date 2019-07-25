import React from 'react';
import { HangmanHeader } from './hangmanPage/header';
import { HangmanBody } from './hangmanPage/body';

function App() {
  const appContainer = {
    width: 1000,
    margin: 10,
  };
  return (
    <div style={appContainer}>
      <HangmanHeader />
      <HangmanBody />
    </div>
  );
}

export default App;
