import React, { useState } from 'react';
import Preview from '../Preview/Preview';
import Selector from '../Selector/Selector';


export default function Main() { 
  const [head, setHead] = useState('duck');
  return (
    <>
      <Selector {...{ setHead }} />;
      <Preview {...{ head }} />;
    </>
  );
}
