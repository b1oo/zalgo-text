import { useState } from 'react';
import toZalgo from 'to-zalgo';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [zalgoText, setZalgoText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setZalgoText(toZalgo(inputText));
  };

  return (
    <div className="App">
      <h1>Zalgo Text Generator</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter text:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Generate Zalgo Text</button>
      </form>
      <div className="zalgo-text">{zalgoText}</div>
    </div>
  );
}

export default App;
