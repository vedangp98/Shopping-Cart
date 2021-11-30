import Cards from "../../UI/Card";
import classes from "./AvailableCloths.module.css";
// import Input from "../../UI/Input";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import Card1 from "../../../assets/items/card1.jpg";
import Card2 from "../../../assets/items/card2.jpg";
import Card3 from "../../../assets/items/card3.jpg";
import Card4 from "../../../assets/items/card4.jpg";
import Card5 from "../../../assets/items/card5.jpg";
import Card6 from "../../../assets/items/card6.jpg";
import Card7 from "../../../assets/items/card7.jpg";
import Card8 from "../../../assets/items/card8.jpg";
import Card9 from "../../../assets/items/card9.jpg";
import Card10 from "../../../assets/items/card10.jpg";
import Card11 from "../../../assets/items/card11.jpg";
import Card12 from "../../../assets/items/card12.jpg";
import Card13 from "../../../assets/items/card13.jpg";
import Card14 from "../../../assets/items/card14.jpg";
import Card15 from "../../../assets/items/card15.jpg";

const DUMMY_CLOTHS_1 = [
  {
    id: "p1",
    image: Card1,
    name: "GAP",
    description: "Men's Pullover Sweet shirt",
    price: "$599",
    strike: "$1200",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p2",
    image: Card2,
    name: "PUMA",
    description: "Solid Polo Collar Grey T-shirt",
    price: "$599",
    strike: "$400",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p3",
    image: Card3,
    name: "U.S. Pollo Assn.",
    description: "Men Blue Regular Fit Striped Casual Sh..",
    price: "$199",
    strike: "$1000",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },

  {
    id: "p4",
    image: Card4,
    name: "Here & Now",
    description: "Men Blue Solid Biker Jacket",
    price: "$500",
    strike: "$1000",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p5",
    image: Card5,
    name: "Roadster",
    description: "Men Red Solid Padded Jacket",
    price: "$600",
    strike: "$1200",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
];
const DUMMY_CLOTHS_2 = [
  {
    id: "p6",
    name: "ROADSTER",
    image: Card6,
    description: "Men's Black and Regular Fit",
    price: "$599",
    strike: "$1200",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p7",
    image: Card7,
    name: "WROGN",
    description: "Men's Neavy Blue Slim Fit",
    price: "$599",
    strike: "$400",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p8",
    image: Card8,
    name: "Mast % Harbour",
    description: "Men Brown Cable Knit Sweater",
    price: "$199",
    strike: "$1000",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p9",
    image: Card9,
    name: "Jack & Jones",
    description: "Men Green Slim Fit Printed Round Ne...",
    price: "$500",
    strike: "$1000",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p10",
    image: Card10,
    name: "PUMA",
    description: "Men Red Solid Tee",
    price: "$600",
    strike: "$1200",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
];

const DUMMY_CLOTHS_3 = [
  {
    id: "p11",
    name: "U.S. Polo Assn.",
    image: Card11,
    description: "Men Green & Blue Striped Polo Collar...",
    price: "$599",
    strike: "$1200",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p12",
    image: Card12,
    name: "U.S. Polo Assn.",
    description: "Men White Checked Polo Collar T-shirt",
    price: "$599",
    strike: "$400",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p13",
    image: Card13,
    name: "Roadster",
    description: "Men Navy Blue & Grey Regular Fit Che...",
    price: "$199",
    strike: "$1000",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p14",
    image: Card14,
    name: "Jack & Jones",
    description: "Men Purple Regular Fit Printed Casual...",
    price: "$500",
    strike: "$1000",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
  {
    id: "p15",
    image: Card15,
    name: "Roadster",
    description: "Men Slim Fit ",
    price: "$600",
    strike: "$1200",
    discount: "(50% OFF)",
    size: ["S,", "M,", "L,", "XL,", "XXL"],
  },
];

const AvailableCloths = () => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({}));
  };

  const ClothItem = (props) => {
    // const price = `$${props.price.toFixed(2)}`;

    return (
      <li className={classes.cloth}>
        <div>
          <div className={classes.images}>
            <img src={props.image} alt="Images" height="50%" width="90%" />
            <div className={classes.overlay}>
              <button className={classes.button} onClick={addToCartHandler}>
                Add to Cart
              </button>
              <div className={classes.size}>{props.size}</div>
            </div>
          </div>
          <h4 className={classes.name}>{props.name}</h4>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>
            {props.price} <del className={classes.strike}>{props.strike}</del>{" "}
            <span className={classes.discount}>{props.discount}</span>{" "}
          </div>
        </div>
        {/* <div>
          <form>
            <Input
              className={classes.input}
              label="Quantity"
              input={{
                id: "Quantity" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1",
              }}
            />
            <button className={classes.button}>Add to Cart</button>
          </form>
        </div> */}
      </li>
    );
  };

  const clothList1 = DUMMY_CLOTHS_1.map((product) => (
    <ClothItem
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      description={product.description}
      price={product.price}
      strike={product.strike}
      discount={product.discount}
      size={product.size}
    />
  ));

  const clothList2 = DUMMY_CLOTHS_2.map((product) => (
    <ClothItem
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      description={product.description}
      price={product.price}
      strike={product.strike}
      discount={product.discount}
      size={product.size}
    />
  ));

  const clothList3 = DUMMY_CLOTHS_3.map((product) => (
    <ClothItem
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      description={product.description}
      price={product.price}
      strike={product.strike}
      discount={product.discount}
      size={product.size}
    />
  ));

  return (
    <section className={classes.cloth}>
      <Cards>
        <ul>{clothList1}</ul>
        <ul>{clothList2}</ul>
        <ul>{clothList3}</ul>
      </Cards>
    </section>
  );
};

export default AvailableCloths;
