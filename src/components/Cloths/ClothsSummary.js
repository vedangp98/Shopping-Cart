import classes from "./ClothsSummary.module.css";

const ClothsSummary = () => {
  return (
    <section className={classes.summary}>
      <div className={classes["first"]}>
        <p>
          Home / Clothing / Mens Clothing / <b>All Mens Clothing</b>
        </p>
      </div>
      <div className={classes["second"]}>
        <p>
          <b>All Products</b> (25 Products)
        </p>
      </div>
      <div className={classes["filter"]}>
        <p className={classes["filter-text"]}>FILTERS: </p>
        <ul className={classes["list"]}>
          <li className={classes["products"]}>All Products</li>
          <li className={classes["tshirt"]}>T-shirt</li>
          <li className={classes["Denim"]}>Denim</li>
          <li className={classes["SweatShirts"]}>SweatShirts</li>
          <li className={classes["pts"]}>Polo Tee Shirt</li>
          <li className={classes["Shirt"]}>Shirt</li>
        </ul>
      </div>
    </section>
  );
};

export default ClothsSummary;
