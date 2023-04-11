
const Activity = (props) => {
  return (
    <div className="Activity">
      <img src={props.src} alt=""></img>
      <p><b>{props.name}</b> has been voted for the poll of <b>{props.polname}</b> <b>Selection</b></p>
    </div>
  );
};
export default Activity;