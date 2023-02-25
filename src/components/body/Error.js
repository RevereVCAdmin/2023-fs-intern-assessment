import React, { Fragment } from "react";

import classes from "./Error.module.css";

const Error = () => {
  return (
    <Fragment>
      <div className={classes.message}>
        <p>There was an error loading the funds. Please try again later.</p>
      </div>
    </Fragment>
  );
};

export default Error;
