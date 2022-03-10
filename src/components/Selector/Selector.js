import React from 'react';

import './Selector.css';

export default function Selector() {
  return (
    <div className="left">
      <div className="picker">
        <label>
                Head
          <select id="head-dropdown">
            <option value="bird">Bird</option>
            <option value="duck">Duck</option>
            <option value="dog">Dog</option>
            <option value="horse">Horse</option>
          </select>
        </label>
        <label>
                Middle
          <select id="middle-dropdown">
            <option value="blue">Blue</option>
            <option value="dress">Fancy</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
          </select>
        </label>
        <label>
                Bottom
          <select id="bottom-dropdown">
            <option value="leg">Single Leg</option>
            <option value="white">White Pants</option>
            <option value="blue">Blue Jeans</option>
          </select>
        </label>
        <label>
                Add a catch phrase
          <input id="catchphrase-input" />
          <button id="catchphrase-button">Add</button>
        </label>
      </div>
      <div id="stats">
        <p id="report"></p>
        <div id="catchphrases">
                
        </div>
      </div>
    </div>
  );
}