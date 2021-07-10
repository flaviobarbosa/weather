import './style.css'

export const Header = ({ searchedCity }) => {
    return (
        <div className={searchedCity ? 'header__small' : ''}>
            <h2 className={searchedCity ? 'title__small' : 'title__big'}>
                Previsão do tempo
            </h2>
        </div>
    )
}
