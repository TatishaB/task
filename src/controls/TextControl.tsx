import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from 'react';

type OneButton = {
  text: string;
  callback: (cb: Dispatch<SetStateAction<string>>, value: string) => void;
};

interface MyButtonProps {
  left?: OneButton[];
  right?: OneButton[];
}

const TextControl: FC<MyButtonProps> = ({ left, right }) => {
  const [inputValue, setInputValue] = useState('');

  function onChangeValue(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function mapButton(buttonArray: OneButton[]) {
    return buttonArray.map(({ text, callback }) => {
      return (
        <button onClick={() => callback(setInputValue, inputValue)}>
          {text}
        </button>
      );
    });
  }

  const leftButton = left && mapButton(left);
  const rightButton = right && mapButton(right);

  return (
    <div className='input_button'>
      {leftButton}
      <input
        type='text'
        value={inputValue}
        onChange={(e) => onChangeValue(e)}
      />
      {rightButton}
    </div>
  );
};

export default TextControl;
