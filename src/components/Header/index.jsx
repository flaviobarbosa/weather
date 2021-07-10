import './style.css'

export const Header = ({ hasSearchedCity }) => {
    return (
        <div className={hasSearchedCity ? 'header__small' : ''}>
            <h2 className={hasSearchedCity ? 'title__small' : 'title__big'}>
                Previsão do tempo
            </h2>
        </div>
    )
}
