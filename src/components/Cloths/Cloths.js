import { Fragment } from "react";
import ClothsSummary from "./ClothsSummary";
import AvailableCloths from "./ClothItem/AvailableCloths";

const Cloths = () => {
  return (
    <Fragment>
      <ClothsSummary />
      <AvailableCloths />
    </Fragment>
  );
};

export default Cloths;
