import SearchImage from "../../assets/search.jpg";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <button className={classes.button}>
      <img className={classes.profile} src={SearchImage} alt="Profile"></img>
    </button>
  );
};

export default Search;
