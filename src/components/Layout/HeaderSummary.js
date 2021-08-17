import classes from "./HeaderSummary.module.css";

const HeaderSummary = () => {
  return (
    <div className={classes.bottom}>
      <h3 className={classes.text}>
        Invite Friends to Fashion Festival & Get Up To $150 Bonus For Every
        Referral
      </h3>
      <button className={classes.button} type="button">
        Invite Now
      </button>
    </div>
  );
};

export default HeaderSummary;
