
import PlusPolButImg from "./imgs/PlusPolButImg";
const PolButton = (props) => {
  return (
    <button onClick={props.func} className="PolButton">
      <PlusPolButImg/>
      {props.text}
    </button>
  );
};
export default PolButton;
