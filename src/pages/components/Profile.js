
const Profile = (props) => {
  return (
    <div className="Profile">
      <div>
        <img src={props.src} alt=""></img>
        <select name="dropdown" id="profile-select">
          <option value={""}>{props.name}</option>
          <option value={"Profile"}>Profile</option>
        </select>
      </div>
    </div>
  );
};
export default Profile;
