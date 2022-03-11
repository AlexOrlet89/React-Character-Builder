import React, { useState } from 'react';
import Preview from '../Preview/Preview';
import Selector from '../Selector/Selector';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');
  const [catchphrase, setCatchphrase] = useState('');
  return (
    <main>
      <Selector {...{ setHead, setMiddle, setBottom, catchphrase, setCatchphrase }} />
      <Preview {...{ head, middle, bottom }} />
    </main>
  );
}
