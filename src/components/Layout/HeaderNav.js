import classes from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <div className={classes.nav}>
      <ul>
        <li className={classes.shop}>Shop</li>
        <li className={classes.aboutus}>About us</li>
        <li className={classes.ourstore}>Our Store</li>
        <li className={classes.contactus}>Contact Us</li>
      </ul>
    </div>
  );
};

export default HeaderNav;
