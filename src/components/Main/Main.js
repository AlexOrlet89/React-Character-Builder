import React, { useState } from 'react';
import Preview from '../Preview/Preview';
import Selector from '../Selector/Selector';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('single leg');
  const [catchphrase, setCatchphrase] = useState('');
  return (
    <>
      <Selector {...{ setHead, setMiddle, setBottom, catchphrase, setCatchphrase }} />;
      <Preview {...{ head, middle, bottom }} />;
    </>
  );
}
