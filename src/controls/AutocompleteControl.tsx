import React, { useEffect, useState, ChangeEvent, FC } from 'react';
import { CountryInfo, getCountryByName } from '../api/apiService';

interface AutocompleteControlProps {
  num: number;
}

const AutocompleteControl: FC<AutocompleteControlProps> = ({ num }) => {
  const [inputValue, setInputValue] = useState('');
  const [countryData, setCountryData] = useState<CountryInfo[]>([]);
  const [boxVisible, setBoxVisible] = useState(true);

  useEffect(() => {
    getCountryByName(inputValue).then((res) => setCountryData(res));
  }, [inputValue]);

  function clickValue(value: string) {
    setInputValue(value);
    setBoxVisible(false);
  }

  function clickInput() {
    setBoxVisible(true);
  }

  function changeInput(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  const filtredCountries = countryData
    .filter((country) => {
      return country.name.toLowerCase().includes(inputValue.toLowerCase());
    })
    .slice(0, num);

  return (
    <div className='searchbox'>
      <input
        className='inputbox_input'
        type='text'
        value={inputValue}
        onChange={(e) => changeInput(e)}
        onClick={() => clickInput()}
      />
      <ul className='searchbox_box'>
        {inputValue && boxVisible
          ? filtredCountries.map(({ name, fullName, flag }) => (
              <li
                className='searhbox_box_item'
                key={name}
                onClick={() => clickValue(name)}
              >
                <img src={flag} alt={name} />
                <p>{name}</p>
                <p>{fullName}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default AutocompleteControl;
