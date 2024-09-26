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
          src="https://as2.ftcdn.net/v2/jpg/05/84/66/13/1000_F_584661359_CN18OI3yMmh8s154PUZYswxKzZjgLlFd.jpg"
          alt="heart"
          className="heart-img"
        />

        <h1>Tu mere se pyar karti hai ya nhi</h1>
        
        <div className="button-container">
          {isSwapped ? (
            <>
              <button  onClick={()=>alert('Mujhe pta tha 😍')} className="btn yes" onMouseEnter={handleHover}>
                Yes
              </button>
              <button onClick={()=>alert('Mujhe pta tha 😍')} className="btn no" onMouseEnter={handleHover}>
                No
              </button>
            </>
          ) : (
            <>
              <button onClick={()=>alert('Mujhe pta tha 😍')} className="btn no" onMouseEnter={handleHover}>
                No
              </button>
              <button onClick={()=>alert('Mujhe pta tha 😍')} className="btn yes" onMouseEnter={handleHover}>
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
