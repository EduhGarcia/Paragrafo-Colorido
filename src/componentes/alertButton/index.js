import './index.css'

const ButtonAlert = (props) => {
    return <button onClick={() => alert(`A label desse botão é: ${props.label}`)} className='styleButton'>{props.label}</button>
}

ButtonAlert.defaultProps = {
    label: 'Saiba Mais'
}

export default ButtonAlert