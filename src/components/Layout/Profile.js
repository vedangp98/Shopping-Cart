import classes from "./Profile.module.css";
import ProfileImage from "../../assets/profile.jpg";

const Profile = () => {
  return (
    <button className={classes.button}>
      <img className={classes.profile} src={ProfileImage} alt="Profile"></img>
    </button>
  );
};

export default Profile;
