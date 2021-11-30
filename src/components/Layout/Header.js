import { Fragment } from "react";
import LogoImage from "../../assets/logo.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderNav from "./HeaderNav";
import HeaderSummary from "./HeaderSummary";
import Profile from "./Profile";
import Search from "./Search";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logoimage}>
          <img src={LogoImage} alt="LogoImage"></img>
        </div>
        <HeaderNav />
        <Profile />
        <Search />
        <div className={classes.tools}>
          <HeaderCartButton />
        </div>
      </header>
      <HeaderSummary />
    </Fragment>
  );
};

export default Header;
