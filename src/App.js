import { useEffect, useState } from 'react'
import './App.css'

import api from './api'
import { capitals } from './utils/capitals'
import { Divider, Header, Card } from './components'
import { Input } from './components/Input'
import { Cities } from './components/Cities'

function App() {
    const [cities, setCities] = useState([])

    useEffect(() => {
        const fetchCapitalsInfo = async () => {
            let _cities = await Promise.all(
                capitals.map(async (capital) => {
                    const response = await api.get(
                        `data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHER_KEY}&id=${capital.id}&units=metric&lang=pt_br`
                    )
                    return response.data
                })
            )

            setCities(_cities)
        }

        fetchCapitalsInfo()
    }, [])

    return (
        <div className="wrapper">
            <Header searchedCity />
            <Card />
            <Input />
            {cities.length > 0 && <Divider />}
            <Cities cities={cities} />
            {/* <section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                }}
            >
                {cities.length > 0 &&
                    cities.map((city) => (
                        <span key={city.name}>{city.name}</span>
                    ))}
            </section> */}
        </div>
    )
}

export default App
