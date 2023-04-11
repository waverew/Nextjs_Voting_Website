
const RecentPol = (props) => {
  return (
    <div className="RecentPol">
      <img src="./img/dashboard/polpic.png" alt="" className="polpic"></img>
      <div>
        <p>
          <b>{props.name}</b>
        </p>
        <p>Selection</p>
      </div>
    </div>
  );
};
export default RecentPol;
