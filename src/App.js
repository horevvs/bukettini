
import './App.css';

import MainComponent from './MainComponent';
import React, { useEffect, useState } from 'react';
import MainPageLogotip from './images/MainPageLogotip.png';

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className='bodyloader '><span className="loader">  <img src={MainPageLogotip} width='300px' height='300px' alt='' />    </span></div>
      ) : (
        <MainComponent />
      )}
    </div>
  )
}
export default App;