import React from "react";
import { Fragment } from "react";

import Fund from "./Fund";
import classes from "./FundRow.module.css";

const FundRow = (props) => {
  return (
    <Fragment>
      <div className={classes.row}>
        {props.funds.map((fund) => (
          <Fund key={fund.id} fund={fund} />
        ))}
      </div>
    </Fragment>
  );
};

export default FundRow;
