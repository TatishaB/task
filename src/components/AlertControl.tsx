import React, { Dispatch, SetStateAction } from 'react';
import TextControl from '../controls/TextControl';

type action = Dispatch<SetStateAction<string>>;

const AlertControl = () => {
  function alertText(setInputValue: action, value: string) {
    if(value) {
     alert(value);
    }
  }

  function alertIsNumder(setInputValue: action, value: string) {
    if (!!Number(value)) alert(value);
  }

  const right = [{ text: 'Alert text', callback: alertText }];

  const left = [{ text: 'Alert number', callback: alertIsNumder }];

  return <TextControl right={right} left={left} />;
};

export default AlertControl;
