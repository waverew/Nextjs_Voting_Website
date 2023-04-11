import LeftMenuItem from "./LeftMenuItem";
import PolButton from "./PolButton";

const LeftMenu = () => {
  const redirect = (astr) => {
    window.location.href = astr;
  };
  return (
    <div className="LeftMenu">
      <div>
        <LeftMenuItem
          href={() => {
            redirect("/dashboard");
          }}
          src="./img/dashboard/Vector-r.png"
          alt=""
          text="Dashboard"
        />
        <LeftMenuItem
          href={() => {
            redirect("/poldata");
          }}
          src="./img/dashboard/Vector-rs.png"
          alt=""
          text="Polling Data"
        />
        <LeftMenuItem
          href={() => {
            redirect("/userdata");
          }}
          src="./img/dashboard/Vector-b.png"
          alt=""
          text="User Data"
        />
        <LeftMenuItem
          href={() => {
            redirect("/history");
          }}
          src="./img/dashboard/Vector-a.png"
          alt=""
          text="Polling History"
        />
        <PolButton text="New Poll" />
      </div>
    </div>
  );
};
export default LeftMenu;
