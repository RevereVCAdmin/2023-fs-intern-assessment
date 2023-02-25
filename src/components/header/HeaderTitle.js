import React from "react";
import { Fragment } from "react";

import classes from "./HeaderTitle.module.css";

const HeaderTitle = () => {
  return (
    <Fragment>
      <div className={classes.title}>
        <h1>Fund Filter</h1>
      </div>
    </Fragment>
  );
};

export default HeaderTitle;
