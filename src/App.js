import { Fragment } from "react";
import { useSelector } from "react-redux";
import Cloths from "./components/Cloths/Cloths";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

//this is root component
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Fragment>
      {showCart && <Cart />}
      <Header />
      <main>
        <Cloths />
      </main>
    </Fragment>
  );
}

export default App;
