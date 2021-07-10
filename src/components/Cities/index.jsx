import { useEffect } from 'react'
import './style.css'

export const Cities = ({ cities }) => {
    return (
        <div className="cities__wrapper">
            <h3 className="cities__header">Capitais</h3>
            <section className="cities__info">
                <div className="cities__info-title">
                    <span className="cities__info-minmax">Min</span>
                    <span className="cities__info-minmax">Máx</span>
                </div>
                {cities.map((city) => (
                    <div className="cities__info-row">
                        <span className="cities__info-minmax">
                            {Math.round(city.main.temp_min)}º
                        </span>
                        <span className="cities__info-minmax">
                            {Math.round(city.main.temp_max)}º
                        </span>
                        <span>{city.name}</span>
                    </div>
                ))}
            </section>
        </div>
    )
}
