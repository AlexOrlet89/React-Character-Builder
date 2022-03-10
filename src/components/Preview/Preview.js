import React from 'react';

export default function Preview({ head }) {
  return (
    <div className="right">
      <div className="character">
        <div className="bg head" id="head">
          {head} </div>
        <div className="bg middle" id="middle">
        </div>
        <div className="bg bottom" id="bottom">
        </div>
      </div>
            
    </div>
  );
}