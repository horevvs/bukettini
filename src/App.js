
import './App.css';


import React, { useEffect, useState } from 'react';






function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  return (
    <div className="App">
      {loading ? (
        <div className='bodyloader'><span class="loader"> </span></div>
      ) : (
        <div className='dd' >

        <img src='' ></>

        </div>
      )}
    </div>
  )
}
export default App;