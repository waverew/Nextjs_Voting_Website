import FinalPolCompact from "./FinalPolCompact";
import RecentPol from "./RecentPol";
import {useState, useEffect} from 'react';
const MainPolArea = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/recentVotes')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className="MainPolArea">
      <h2>Final Pol</h2>
      <div className="final-pol">
      {data.map((item, index) => (
        <div key={index}>
          <FinalPolCompact name={item.Name}/>
        </div>
      ))}
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
