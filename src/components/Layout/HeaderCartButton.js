import CartImage from "../../assets/cart.jpg";
import classes from "./HeaderCartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <img className={classes.icon} src={CartImage} alt="Cart"></img>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
