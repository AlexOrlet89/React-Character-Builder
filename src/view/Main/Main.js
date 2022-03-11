import React, { useState } from 'react';
import Preview from '../../components/Preview/Preview';
import Selector from '../../components/Selector/Selector';
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
