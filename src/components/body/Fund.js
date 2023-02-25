import React from "react";
import { Fragment } from "react";

import Card from "../UI/Card";
import classes from "./Fund.module.css";

const Fund = (props) => {
  const fund = props.fund;
  return (
    <Fragment>
      <Card className={classes.fund}>
        <h2>{fund.fundName}</h2>
        <p className={classes.location}>{fund.location}</p>
      </Card>
    </Fragment>
  );
};

export default Fund;
