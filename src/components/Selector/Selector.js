import React from 'react';

import './Selector.css';

export default function Selector({ setHead, setMiddle, setBottom, catchphrase, setCatchphrase }) {
  return (
    <div className="left">
      <div className="picker">
        <label>
          Head
          <select id="head-dropdown" onChange={(e) => setHead(e.target.value)}>
            <option value="bird">Bird</option>
            <option value="duck">Duck</option>
            <option value="dog">Dog</option>
            <option value="horse">Horse</option>
          </select>
        </label>
        <label>
          Middle
          <select id="middle-dropdown" onChange={(e) => setMiddle(e.target.value)}>
            <option value="blue">Blue</option>
            <option value="dress">Fancy</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
          </select>
        </label>
        <label>
          Bottom
          <select id="bottom-dropdown" onChange={(e) => setBottom(e.target.value)}>
            <option value="leg">Single Leg</option>
            <option value="white">White Pants</option>
            <option value="blue">Blue Jeans</option>
          </select>
        </label>
        <label>
          Add a catch phrase
          <input id="catchphrase-input" onChange={(e) => setCatchphrase(e.target.value)} />
          <button
            id="catchphrase-button"
            onClick={(e) => {
              console.log('clicked!');
              e.preventDefault();
              const p = document.createElement('p');
              p.textContent = `${catchphrase}`;
              const catchphrases = document.getElementById('catchphrases');
              catchphrases.append(p);
            }}
          >
            Add
          </button>
        </label>
      </div>
      <div id="stats">
        <p id="report"></p>
        <div id="catchphrases"></div>
      </div>
    </div>
  );
}
