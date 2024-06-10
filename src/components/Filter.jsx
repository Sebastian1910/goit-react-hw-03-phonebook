// Filter.js
import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, onChange }) => (
  <div className="Filter">
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
