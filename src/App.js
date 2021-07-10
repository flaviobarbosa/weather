import { useEffect, useState } from 'react'
import { capitals } from './utils/capitals'
import { Divider, Header, Card } from './components'
import { Input } from './components/Input'
import { Cities } from './components/Cities'

import api from './api'
import './App.css'

function App() {
    const [cities, setCities] = useState([])
    const [search, setSearch] = useState('')
    const [city, setCity] = useState(null)
    const [hasSearchedCity, setHasSearchedCity] = useState(false)

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

    const handleCitySearch = async (e) => {
        e.preventDefault()

        const response = await api.get(
            `data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric&lang=pt_br&q=${search}`
        )

        setCity(response.data)
        setHasSearchedCity(true)
        setSearch('')
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleCloseCard = () => {
        setCity(null)
        setHasSearchedCity(false)
    }

    return (
        <div className="wrapper">
            <Header hasSearchedCity={hasSearchedCity} />
            {city && <Card city={city} close={handleCloseCard} />}
            <Input
                value={search}
                onChange={handleInputChange}
                handleSubmit={handleCitySearch}
            />
            {cities.length > 0 && <Divider />}
            <Cities cities={cities} />
        </div>
    )
}

export default App
