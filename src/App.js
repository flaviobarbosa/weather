import { useEffect, useState } from 'react';
import './App.css';

import api from './api';
import { capitals } from './utils/capitals'

function App() {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCapitalsInfo = async () => {
      let _cities = await Promise.all(capitals.map(async (capital) => {
        const response = await api.get(`data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHER_KEY}&id=${capital.id}&units=metric&lang=pt_br`);
        return response.data;
      }))

      setCities(_cities);
    }

    fetchCapitalsInfo();
  }, []);

  return (
    <div >
      {cities.length > 0 && cities.map(city => <p key={city.name}>{city.name}</p>)}
    </div>
  );
}

export default App;
