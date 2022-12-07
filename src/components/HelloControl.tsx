import React, { Dispatch, SetStateAction } from 'react';
import TextControl from '../controls/TextControl';

type action = Dispatch<SetStateAction<string>>;

const HelloControl = () => {
  function clear(setInputValue: action) {
    setInputValue('');
  }
  function sayHello(setInputValue: action) {
    setInputValue('Hello world!');
  }

  const right = [
    { text: 'Clear', callback: clear },
    { text: 'Say hello!', callback: sayHello },
  ];

  return <TextControl right={right} />;
};

export default HelloControl;
