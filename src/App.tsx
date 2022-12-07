import React from 'react';
import './App.css';
import AlertControl from './components/AlertControl';
import HelloControl from './components/HelloControl';
import AutocompleteControl from './controls/AutocompleteControl';

function App() {
  return (
    <div>
      <AlertControl />
      <HelloControl />
      <div className='container'>
        <AutocompleteControl num={3} />
        <AutocompleteControl num={10} />
      </div>
    </div>
  );
}

export default App;
