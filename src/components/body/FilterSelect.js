import React, { Fragment } from "react";
import Select from "react-select";

import classes from "./FilterSelect.module.css";

const FilterSelect = (props) => {
  // Options for dropdown
  const options = [
    { value: "all", label: "All" },
    { value: "North America", label: "North America" },
    { value: "South America", label: "South America" },
    { value: "Europe", label: "Europe" },
    { value: "Asia", label: "Asia" },
    { value: "Africa", label: "Africa" },
    { value: "Australia", label: "Australia" },
  ];

  // Handle change in dropdown
  const handleChange = (selectedOption) => {
    props.setFilter(selectedOption.value);
  };

  return (
    <Fragment>
      <div className={classes.dropdown}>
        <Select
          defaultValue={options[0]}
          options={options}
          onChange={handleChange}
        />
      </div>
    </Fragment>
  );
};

export default FilterSelect;
