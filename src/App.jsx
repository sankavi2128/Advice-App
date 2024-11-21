import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [isAdviceVisible, setIsAdviceVisible] = useState(false);

  const getAdvice = () => {
    // You can replace this with actual advice API or logic
    const newAdvice = 'Stay positive and keep moving forward!';
    setAdvice(newAdvice);
    setIsAdviceVisible(true);
  };

  return (
    <div className="app">
      <div className="container">
        {/* Button to Get Advice */}
        <div className="header">
          <button className="advice-button" onClick={getAdvice}>
            Get Advice
          </button>
        </div>

        {/* Display the advice when it's visible */}
        {isAdviceVisible && (
          <div className="advice-section">
            <p>{advice}</p>
            <button
              className="read-advice-button"
              onClick={() => setIsAdviceVisible(false)}
            >
              You have read the advice
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
