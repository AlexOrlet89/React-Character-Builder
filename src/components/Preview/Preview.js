import React from 'react';

export default function Preview({ head, middle, bottom }) {
  return (
    <div className="right">
      <div className="character">
        <div className="bg head" id="head">
          {head}
        </div>
        <div className="bg middle" id="middle">
          {middle}
        </div>
        <div className="bg bottom" id="bottom">
          {bottom}
        </div>
      </div>
    </div>
  );
}
