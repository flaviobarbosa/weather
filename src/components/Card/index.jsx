import { useEffect } from 'react'
import { Divider } from '../Divider'
import './style.css'

export const Card = ({ city }) => {
    return (
        <section className="card__wrapper">
            <span class="material-icons icon icon__close">close</span>
            <span className="card__header">
                {city.name} - {city.sys.country}
            </span>
            <h1 className="card__current-weather">
                <span>{Math.round(city.main.temp)}ºC</span>{' '}
                <span className="card__current-description">
                    {city.weather[0].description}
                </span>
            </h1>
            <div className="card__info">
                <div className="card__row-left">
                    <div className="card__row-one">
                        <span class="material-icons icon">south</span>
                        <span className="card__row-value card_row-min">
                            {Math.round(city.main.temp_min)}º
                        </span>
                        <span class="material-icons icon">north</span>
                        <span className="card__row-value">
                            {Math.round(city.main.temp_max)}º
                        </span>
                    </div>
                    <div className="card__row-two">
                        <span className="card__row-title">Vento</span>
                        <span className="card__row-value">
                            {Math.round(city.wind.speed)}km/h
                        </span>
                    </div>
                </div>
                <div className="card__row-right">
                    <div className="card__row-one">
                        <span className="card__row-title">Sensação</span>
                        <span className="card__row-value">
                            {Math.round(city.main.feels_like)}º
                        </span>
                    </div>
                    <div className="card__row-two">
                        <span className="card__row-title">Humidade</span>
                        <span className="card__row-value">
                            {Math.round(city.main.humidity)}%
                        </span>
                    </div>
                </div>
            </div>
            <div className="card__divider">
                <Divider primary />
            </div>

            <div className="card__forecast">
                <div className="card__forecast-box">
                    <span className="card__forecast-title">Terça</span>
                    <span className="card__forecast-value">16º 26º</span>
                </div>
                <div className="card__forecast-box">
                    <span className="card__forecast-title">Quarta</span>
                    <span className="card__forecast-value">16º 26º</span>
                </div>
                <div className="card__forecast-box">
                    <span className="card__forecast-title">Quinta</span>
                    <span className="card__forecast-value">16º 26º</span>
                </div>
                <div className="card__forecast-box">
                    <span className="card__forecast-title">Sexta</span>
                    <span className="card__forecast-value">16º 26º</span>
                </div>
            </div>
        </section>
    )
}
