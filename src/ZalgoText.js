import React, { useState } from 'react';
import Zalgo from 'zalgo-text';

function ZalgoText() {
  const [inputText, setInputText] = useState('');
  const [zalgoText, setZalgoText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const transformText = () => {
    setZalgoText(Zalgo.generate(inputText));
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={transformText}>Transform Text</button>
      <div style={{ fontFamily: 'Zalgo' }}>{zalgoText}</div>
    </div>
  );
}

export default ZalgoText;
