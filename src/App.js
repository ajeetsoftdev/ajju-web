import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleHover = () => {
    setIsSwapped(!isSwapped); // Toggle the state to swap buttons
  };

  return (
    <div className="App">
      <header className="App-header">
      <img
          src="https://stock.adobe.com/ca/images/ai-generates-illustrations-creative-love/584661359"
          alt="heart"
          className="heart-img"
        />

        <h1>Tu mere se pyar karti hai ya nhi</h1>
        
        <div className="button-container">
          {isSwapped ? (
            <>
              <button  onClick={()=>alert('Karogi kaise nhi 😍')} className="btn yes" onMouseEnter={handleHover}>
                Yes
              </button>
              <button onClick={()=>alert('Karogi kaise nhi 😍')} className="btn no" onMouseEnter={handleHover}>
                No
              </button>
            </>
          ) : (
            <>
              <button onClick={()=>alert('Karogi kaise nhi 😍')} className="btn no" onMouseEnter={handleHover}>
                No
              </button>
              <button onClick={()=>alert('Karogi kaise nhi 😍')} className="btn yes" onMouseEnter={handleHover}>
                Yes
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
