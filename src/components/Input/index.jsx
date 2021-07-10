import './style.css'

export const Input = (props) => {
    return (
        <form className="input__wrapper" onSubmit={props.handleSubmit}>
            <input
                className="input"
                type="text"
                placeholder="Insira aqui o nome da cidade"
                {...props}
            />
            <span
                className="material-icons input-icon"
                onClick={props.handleSubmit}
            >
                search
            </span>
        </form>
    )
}
