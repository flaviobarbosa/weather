import './style.css';

export const Input = () => {
    return (
        <form className="input__wrapper">
            <input className="input" type="text" placeholder="Insira aqui o nome da cidade" />
            <span className="material-icons input-icon">search</span>
        </form>
    )
}