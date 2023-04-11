
import FinalPolCompact from "./FinalPolCompact";
import RecentPol from "./RecentPol";
const MainPolArea = () => {
  return (
    <div className="MainPolArea">
      <h2>Final Pol</h2>
      <div className="final-pol">
        <FinalPolCompact name="Marco" />
        <FinalPolCompact name="Stacy" />
      </div>
      <h2 className="ab">Recent Polling</h2>
      <div className="recent-pol">
        <RecentPol name="Barbra" />
        <RecentPol name="Megan" />
      </div>
    </div>
  );
};
export default MainPolArea;
