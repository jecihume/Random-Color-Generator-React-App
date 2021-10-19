import './App.css';
import { useState } from 'react';

const randomColor = require('randomcolor');

export default function App() {
  const [color, setColor] = useState('#ff66ff');

  return (
    <div className="App">
      <h1 style={{ color: color }}>Random Color</h1>
      <p
        style={{
          backgroundColor: color,
          width: '220px',
          align: 'center',
          margin: '0 auto',
        }}
      >
        Choose your own color!!!
      </p>
      <div>
        <button
          onClick={() => {
            setColor(randomColor());
          }}
        >
          New Colour!
        </button>
      </div>
    </div>
  );
}
