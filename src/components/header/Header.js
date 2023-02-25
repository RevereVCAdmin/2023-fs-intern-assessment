import React from "react";
import { Fragment } from "react";

import HeaderTitle from "./HeaderTitle";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <HeaderTitle className={classes.header} />
    </Fragment>
  );
};

export default Header;
