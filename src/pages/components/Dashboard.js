import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LeftMenu from "./LeftMenu";
import MainPolArea from "./MainPolArea";
import VoteActivity from "./VoteActivity";
import Profile from "./Profile";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Logo />
      <SearchBar />
      <div className="menu">
        <LeftMenu />
      </div>
      <MainPolArea />
      <VoteActivity />
      <Profile name="Mikkie" src="./img/dashboard/Ellipse 8.png" />
    </div>
  );
};
export default Dashboard;
