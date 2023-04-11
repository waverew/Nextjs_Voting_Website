
const Button = (props) => {
    return (
            <button onClick={props.func} type={props.type} className="Button">{props.text}</button>
    )
}
export default Button;