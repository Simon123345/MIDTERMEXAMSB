import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState('10 Things That Require Zero Talent');

 
  const fullName = 'Simon Bondoc';
  const section = 'IT-3A';
  const subjectCode = 'C-PCIT9';

  const items = {
    '1': 'Being On Time',
    '2': 'Making An Effort',
    '3': 'Being High Energy',
    '4': 'Having A Positive Attitude',
    '5': 'Being Passionate',
    '6': 'Using Good Body Language',
    '7': 'Being Coachable',
    '8': 'Doing A Little Extra',
    '9': 'Being Prepared',
    '0': 'Having A Strong Work Ethic',
  };

  const handleClick = (key) => {
    if (key === 'NAME') {
      setDisplayText(fullName.toUpperCase());
    } else if (key === 'SUBJ') {
      setDisplayText(subjectCode.toUpperCase());
    } else if (items[key]) {
      setDisplayText(items[key]);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="header">{fullName} - {section}</h1>

        <div className="display">
          {displayText}
        </div>

        <div className="grid">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>

          <button onClick={() => handleClick('NAME')}>NAME</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('SUBJ')}>SUBJ</button>
        </div>
      </div>
    </div>
  );
}

export default App;
