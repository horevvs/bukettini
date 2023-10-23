
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainComponent from './MainComponent';
import React, { useEffect, useState } from 'react';
import MainPageLogotip from './images/MainPageLogotip.png';
import Feedback from './components/Feedback';

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
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<MainComponent />} />
            <Route path="/2" element={<Feedback />} /> 
          </Routes>
        </BrowserRouter>

      )}
    </div>
  )
}
export default App;