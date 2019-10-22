import React from 'react';
import './App.css';
import { Card } from './components/Card';

const App: React.FC = () => {
  return (
    <div className="App">
      {Card({ name: "New Card", id: 1 })}
      <Card name="does it work?" id={2} />
    </div>
  );
}

export default App;