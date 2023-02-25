import React from "react";
import { Fragment } from "react";

import FundRow from "./FundRow";

const FundList = (props) => {
  // Split funds into rows of 3
  const rows = [];
  let row = [];
  props.funds.forEach((fund) => {
    if (row.length === 3) {
      rows.push(row);
      row = [];
    }
    row.push(fund);
  });
  if (row.length > 0) {
    rows.push(row);
  }

  return (
    <Fragment>
      {rows.map((row) => (
        <FundRow key={rows.indexOf(row)} funds={row} />
      ))}
    </Fragment>
  );
};

export default FundList;
