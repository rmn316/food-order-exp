import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import image from "../../assets/meals.jpeg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
