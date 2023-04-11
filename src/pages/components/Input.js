
const Input = (props) => {
  return (
    <div className="Input">
      <p className='text'>{props.text}</p>
      <label>
        <img 
        src={props.src} 
        alt={props.alt}
        className="img"
        ></img>
      </label>
      <input
        type={props.type}
        name={props.name}
        defaultValue={props.defaultValue}
      ></input>
    </div>
  );
};
export default Input;