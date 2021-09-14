import './App.css';
import { useState } from 'react';

const randomColor = require('randomcolor');

export default function App() {
  // lightbulb, light switch, on(default value)
  const [color, setColor] = useState('#ff66ff');
  // create a box that holds a random color with every reload

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
        Choose your own color!
      </p>
      {/* This creates the button */}
      <div>
        <button
          onClick={() => {
            // setColor('green');
            console.log('');
            setColor(randomColor());
          }}
        >
          New Colour!
        </button>
      </div>
    </div>
  );
}
