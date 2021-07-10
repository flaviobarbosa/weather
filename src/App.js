import { useEffect } from 'react';
import './App.css';

import api from './api';

function App() {

  useEffect(() => {
    api.get(`data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHER_KEY}&id=3451189&units=metric&lang=pt_br`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
