import React, { Fragment, useState } from "react";
import FilterSelect from "./FilterSelect";

import FundList from "./FundList";
import Error from "./Error";

const Body = (props) => {
  // Initialize state for filter
  const [filter, setFilter] = useState("all");

  // Filter funds based on filter state
  let funds = [];
  if (props.funds && props.funds.length > 0) {
    funds = props.funds.filter((fund) => {
      if (filter === "all") {
        return true;
      } else {
        return fund.location === filter;
      }
    });
    // If there are no funds retrieved, display error message
  } else {
    return (
      <Fragment>
        <Error />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <FilterSelect setFilter={setFilter} />
      <FundList funds={funds} />
    </Fragment>
  );
};

export default Body;
