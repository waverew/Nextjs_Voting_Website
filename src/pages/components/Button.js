const Button = (props) => {
  return (
    <button onClick={props.click} type={props.type} className="Button">
      {props.text}
    </button>
  );
};
export default Button;
