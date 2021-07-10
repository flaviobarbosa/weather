import './style.css'

export const Divider = ({ primary }) => {
    return <div className={`divider ${primary ? 'primary' : ''}`}></div>
}
